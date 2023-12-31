import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Animedle } from "../types";
import { fetchTool, minimalDelayFunction } from "../utils/api.util";
import { usePromises } from "./promises.context";

interface AnimedleContextValue {
    animedle: Animedle.ContextValue | null;
    setAnimedle: Dispatch<SetStateAction<Animedle.ContextValue | null>>;
}

interface Props {
    children: ReactNode;
}

const AnimedleContext = createContext<AnimedleContextValue>(null!);

export const useAnimedle = () => useContext(AnimedleContext);

export const useAnimedleInfo = () => {
    const { animedle } = useContext(AnimedleContext);
    return animedle as Animedle.ContextValue;
};

export const AnimedleProvider = ({ children }: Props) => {
    const { endLoading, setToast, startLoading } = usePromises();

    const [animedle, setAnimedle] = useState<Animedle.ContextValue | null>(null);

    useEffect(() => {
        if (animedle !== null) return;
        (async () => {
            startLoading();
            const { delayTime, response } = await minimalDelayFunction<Animedle.ContextValue>(() => fetchTool('animedle'));
            setTimeout(() => {
                endLoading();
                if (!response.status) {
                    setAnimedle(null);
                    setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                    return;
                };
                setAnimedle(response.results);
            }, delayTime);
        })()
    }, []);

    return (
        <AnimedleContext.Provider value={{
            animedle,
            setAnimedle,
        }}>
            {children}
        </AnimedleContext.Provider>
    );
};