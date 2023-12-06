import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Profile } from "../types";
import { fetchTool, minimalDelayFunction } from "../utils/api.util";
import { usePromises } from "./promises.context";

interface ProfileContextValue {
    profile: Profile.ContextValue | null;
    setProfile: Dispatch<SetStateAction<Profile.ContextValue | null>>;
}

interface Props {
    children: ReactNode;
}

const ProfileContext = createContext<ProfileContextValue>(null!);

export const useProfile = () => useContext(ProfileContext);

export const useProfileInfo = () => {
    const { profile } = useContext(ProfileContext);
    return profile as Profile.ContextValue;
};

export const ProfileProvider = ({ children }: Props) => {
    const { endLoading, setToast, startLoading } = usePromises();

    const [profile, setProfile] = useState<Profile.ContextValue | null>(null);

    useEffect(() => {
        if (profile !== null) return;
        (async () => {
            startLoading();
            const { delayTime, response } = await minimalDelayFunction<Profile.ContextValue>(() => fetchTool('user/profile'));
            setTimeout(() => {
                endLoading();
                if (!response.status) {
                    setProfile(null);
                    setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                    return;
                };
                setProfile(response.results);
            }, delayTime);
        })()
    }, []);

    return (
        <ProfileContext.Provider value={{
            profile,
            setProfile,
        }}>
            {children}
        </ProfileContext.Provider>
    );
};