import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import axios, { Canceler, AxiosError } from 'axios';
import { usePromises } from '../contexts/promises.context';
import { getAuthenticationHeaders } from '../utils/api.util';

export interface SearchResult<T> {
    data: T[];
    loading: boolean;
    hasMore: boolean;
    amount: number;
    page: number;
    searchPhrase: string;
    handleSearchPhraseChange: (value: string) => void;
    setPage: Dispatch<SetStateAction<number>>;
    refresh(): void;
    reset(): void;
}

export function useSearch<T>(
    collection: string,
    limit: number,
    withoutSearch?: boolean,
): SearchResult<T> {
    const { setToast } = usePromises();

    const debounceTimeoutId = useRef<NodeJS.Timeout | null>(null);
    const delayTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const [reload, setReload] = useState(false);
    const [page, setPage] = useState(1);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [search, setSearch] = useState('');
    const handleSearchPhraseChange = (text: string) => {
        setSearchPhrase(text);
    };

    const refresh = () => {
        setReload(state => !state);
        setPage(1);
    };

    const reset = () => {
        setData([]);
    };

    useEffect(() => {
        setData([]);
    }, [reload, search]);

    useEffect(() => {
        if (debounceTimeoutId.current) {
            clearTimeout(debounceTimeoutId.current);
        }
        debounceTimeoutId.current = setTimeout(() => {
            setPage(1);
            setSearch(searchPhrase);
        }, 500);
    }, [searchPhrase]);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [amount, setAmount] = useState(0);


    useEffect(() => {
        if (!withoutSearch && !search) return;
        (async () => {
            const startTime = new Date().valueOf();
            if (delayTimeoutId.current) {
                clearTimeout(delayTimeoutId.current);
            }
            let cancel: Canceler;
            setLoading(true);
            const headers = await getAuthenticationHeaders();
            axios({
                method: 'GET',
                url: `${process.env.EXPO_PUBLIC_HOST_ADDRESS}/${collection}`,
                params: {
                    search: search,
                    page,
                    limit,
                },
                headers: headers,
                cancelToken: new axios.CancelToken(c => cancel = c),
                withCredentials: true,
            })
                .then(res => {
                    const endTime = new Date().valueOf();
                    delayTimeoutId.current = setTimeout(() => {
                        setLoading(false);
                        setAmount(res.data.count);
                        setData(prev => [...prev, ...res.data.results]);
                        setHasMore(res.data.results.length > 0);
                    }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
                })
                .catch((e: AxiosError) => {
                    const endTime = new Date().valueOf();
                    delayTimeoutId.current = setTimeout(() => {
                        setLoading(false);
                        if (axios.isCancel(e)) return;
                        const errorObject = (e as AxiosError).toJSON() as { status: number };
                        if (errorObject.status === 403) {
                            // Logout client
                            return;
                        }
                        if (axios.isCancel(e)) return;
                        setToast({ type: 'error', text1: 'Failed to fetch!', text2: 'There was an error while fetching data.' });
                    }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
                });

            return () => {
                if (delayTimeoutId.current) {
                    clearTimeout(delayTimeoutId.current);
                }
                cancel();
            }
        })()
    }, [search, page, collection, reload]);

    return { loading, data, hasMore, amount, page, searchPhrase, setPage, handleSearchPhraseChange, refresh, reset };
}