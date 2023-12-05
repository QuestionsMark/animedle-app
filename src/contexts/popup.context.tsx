import { createContext, ReactNode, useContext, useState } from "react";

interface PopupContextValue {
    open(component: ReactNode): void;
    close(): void;
    isOpen: boolean;
}

interface Props {
    children: ReactNode;
}

const PopupContext = createContext<PopupContextValue>(null!);

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [component, setComponent] = useState<ReactNode>(null);

    const close = () => {
        setIsOpen(false);
        setComponent(null);
    }

    const open = (component: ReactNode) => {
        setComponent(component);
        setIsOpen(true);
    }

    return (
        <PopupContext.Provider value={{
            close,
            isOpen,
            open,
        }}>
            {children}
            {isOpen && component}
        </PopupContext.Provider>
    );
};