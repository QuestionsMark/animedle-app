import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import { hideLoader } from "../animations/loader.animation";
import { Loader } from "../screens/Loaders/Loader";

interface Props {
    children: ReactNode;
}

interface ToastValue {
    type: 'error' | 'info' | 'success',
    text1: string;
    text2?: string;
}

interface PromisesContextValue {
    loading: boolean;
    setLoading: (isLoading: boolean) => void;
    endLoading(): void;
    startLoading(): void;
    setToast: Dispatch<SetStateAction<ToastValue | null>>;
}

export const PromisesContext = createContext<PromisesContextValue>(null!);

export const usePromises = () => useContext(PromisesContext);

export const PromisesProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [toast, setToast] = useState<ToastValue | null>(null);

    const endLoading = (): Promise<void> => {
        return new Promise((resolve) => {
            hideLoader();
            setTimeout(() => {
                setLoading(false);
                resolve();
            }, 500);
        });
    };

    const startLoading = () => {
        setLoading(true);
    };

    useEffect(() => {
        if (!toast) return;
        const { text1, type, text2 } = toast;
        Toast.show({ type, text1, text2 });
    }, [toast]);

    return (
        <PromisesContext.Provider value={{
            loading,
            setLoading,
            endLoading,
            startLoading,
            setToast,
        }}>
            {children}
            {loading && <Loader />}
        </PromisesContext.Provider>
    );
};