import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { History } from "../types";
import { fetchTool, minimalDelayFunction } from "../utils/api.util";
import { usePromises } from "./promises.context";

interface HistoryContextValue {
    history: History.ContextValue | null;
    setHistory: Dispatch<SetStateAction<History.ContextValue | null>>;
}

interface Props {
    children: ReactNode;
}

const HistoryContext = createContext<HistoryContextValue>(null!);

export const useHistory = () => useContext(HistoryContext);

export const useHistoryInfo = () => {
    const { history } = useContext(HistoryContext);
    return history as History.ContextValue;
};

export const HistoryProvider = ({ children }: Props) => {
    const { setError, endLoading, startLoading } = usePromises();

    const [history, setHistory] = useState<History.ContextValue | null>(null);

    useEffect(() => {
        if (history !== null) return;
        (async () => {
            startLoading();
            const { delayTime, response } = await minimalDelayFunction<History.ContextValue>(() => fetchTool('user/history'));
            setTimeout(() => {
                endLoading();
                if (!response.status) {
                    setHistory(null);
                    setError({ text1: 'Fetch Failed!', text2: response.message });
                    return;
                };
                setHistory(response.results);
            }, delayTime);
        })()
    }, []);

    return (
        <HistoryContext.Provider value={{
            history,
            setHistory,
        }}>
            {children}
        </HistoryContext.Provider>
    );
};