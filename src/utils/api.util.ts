import * as SecureStore from 'expo-secure-store';
import { ClientResponse, ClientResponseError, Method, Auth, ServerErrorResponse } from '../types';

import { Dispatch, SetStateAction } from 'react';

const setErrorResponse = (response: Response, res: ServerErrorResponse): ClientResponseError => {
    console.warn(res.message);
    if (response.status === 400) return { message: res.message, status: false, problems: res.problems };
    return { message: res.message, status: false };
};

export async function minimalDelayFunction<T>(callback: Function): Promise<{ delayTime: number, response: ClientResponse<T> }> {
    const startTime = new Date().valueOf();
    const response = await callback();
    const endTime = new Date().valueOf();
    return {
        delayTime: endTime - startTime < 500 ? 500 - (endTime - startTime) : 0,
        response,
    };
};

export async function getAuthenticationHeaders(): Promise<{ [key: string]: string }> {
    const token = await SecureStore.getItemAsync(Auth.SecureStoreKey.Auth);
    return token ? {
        'X-authentication-token': token,
    } : {};
};

export async function fetchTool<T>(path: string, method: Method = 'GET', body: any = undefined): Promise<ClientResponse<T>> {
    try {
        let headers = await getAuthenticationHeaders();
        if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(method)) {
            headers = {
                ...headers,
                'Content-Type': 'application/json',
            };
        }

        const response = await fetch(`${process.env.EXPO_PUBLIC_HOST_ADDRESS}/${path[0] === '/' ? path.slice(1) : path}`, {
            method,
            headers: headers,
            body: body && JSON.stringify(body),
            credentials: 'include',
        });
        const res = await response.json();
        if (response.ok) return { ...res, status: true };
        return setErrorResponse(response, res);
    } catch (e) {
        return { message: 'Something went wrong, try again later.', status: false };
    }
};

export async function fetchWithFileUpload<T>(path: string, method: Method = 'POST', body: FormData): Promise<ClientResponse<T>> {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_HOST_ADDRESS}/${path[0] === '/' ? path.slice(1) : path}`, {
            method,
            headers: await getAuthenticationHeaders(),
            body,
            credentials: 'include',
        });
        const res = await response.json();
        if (response.ok) return { ...res, status: true };
        return setErrorResponse(response, res);
    } catch (error) {
        return { message: 'Something went wrong, try again later.', status: false };
    }
};

export const showProblem = (response: ServerErrorResponse): string => {
    if (response.problems && response.problems.length !== 0) return `${response.message} ${response.problems.join(' ')}`;
    return response.message;
}

export const lastDataElementRef = (amount: number, hasMore: boolean, limit: number, loading: boolean, page: number, setPage: Dispatch<SetStateAction<number>>) => {
    if (loading || amount < page * limit || !hasMore) return;
    setPage(prev => prev + 1);
};