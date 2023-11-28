import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import { Loader } from "../components/common/Loader";

interface Props {
    children: ReactNode;
}

interface ToastValue {
    text1: string;
    text2?: string;
}

interface PromisesContextValue {
    loading: boolean;
    error: ToastValue | null;
    message: ToastValue | null;
    info: ToastValue | null;
    setLoading: (isLoading: boolean) => void;
    setError: (error: ToastValue | null) => void;
    setMessage: (message: ToastValue | null) => void;
    setInfo: (info: ToastValue | null) => void;
}

const defaultPromisesContextValue: PromisesContextValue = {
    error: null,
    info: null,
    loading: false,
    message: null,
    setError: undefined!,
    setInfo: undefined!,
    setLoading: undefined!,
    setMessage: undefined!,
};

export const PromisesContext = createContext<PromisesContextValue>(defaultPromisesContextValue);

export const usePromises = () => useContext(PromisesContext);

export const PromisesProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ToastValue | null>(null);
    const [info, setInfo] = useState<ToastValue | null>(null);
    const [message, setMessage] = useState<ToastValue | null>(null);

    useEffect(() => {
        if (error && !loading) Toast.show({ type: 'error', text1: error.text1, text2: error.text2 || '' });
        if (info && !loading) Toast.show({ type: 'info', text1: info.text1, text2: info.text2 || '' });
        if (message && !loading) Toast.show({ type: 'success', text1: message.text1, text2: message.text2 || '' });
        setError(null);
        setInfo(null);
        setMessage(null);
    }, [error, loading, message]);

    return (
        <PromisesContext.Provider value={{
            error,
            info,
            loading,
            message,
            setError,
            setInfo,
            setLoading,
            setMessage,
        }}>
            {children}
            {loading && <Loader />}
        </PromisesContext.Provider>
    );
};