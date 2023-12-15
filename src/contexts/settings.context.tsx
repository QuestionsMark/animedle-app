import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Settings } from "../types";

interface SettingsContextValue {
    nav: Settings.Nav;
    setNav: Dispatch<SetStateAction<Settings.Nav>>;
}

interface Props {
    children: ReactNode;
}

const SettingsContext = createContext<SettingsContextValue>(null!);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: Props) => {
    const [nav, setNav] = useState<Settings.Nav>('Home');

    return (
        <SettingsContext.Provider value={{
            nav,
            setNav,
        }}>
            {children}
        </SettingsContext.Provider>
    );
};