import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { Auth, User } from "../types";
import { fetchTool, minimalDelayFunction } from "../utils/api.util";
import { usePromises } from "./promises.context";

interface UserContextValue {
    user: User.ContextValue | null;
    setUser: Dispatch<SetStateAction<User.ContextValue | null>>;
}

interface Props {
    children: ReactNode;
}

const UserContext = createContext<UserContextValue>(null!);

export const useUser = () => useContext(UserContext);

export const useUserInfo = () => {
    const { user } = useContext(UserContext);
    return user as User.ContextValue;
};

export const UserProvider = ({ children }: Props) => {
    const { endLoading, setToast, startLoading } = usePromises();

    const [user, setUser] = useState<User.ContextValue | null>(null);

    useEffect(() => {
        if (user !== null) return;
        (async () => {
            startLoading();
            const { delayTime, response } = await minimalDelayFunction<User.ContextValue>(() => fetchTool('auth/is-logged'));
            setTimeout(() => {
                endLoading();
                if (!response.status) {
                    SecureStore.deleteItemAsync(Auth.SecureStoreKey.Auth);
                    setUser(null);
                    setToast({ type: 'error', text1: 'Authorization Error', text2: 'Session has expired.' });
                    return;
                };
                setUser(response.results);
            }, delayTime);
        })()
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};