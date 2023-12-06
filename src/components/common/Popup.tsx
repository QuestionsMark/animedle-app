import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { Title } from "./Title";
import { IconButton } from "./IconButton";
import { usePopup } from "../../contexts/popup.context";
import { popupStyles } from "../../styles";

interface Props {
    children: ((close: () => void) => ReactNode) | ReactNode;
    style?: ViewStyle;
}

interface HeaderProps {
    title: string;
}

interface FooterProps {
    children?: ReactNode;
    onClose?(): void;
    style?: ViewStyle;
}

export const Popup = ({ children, style }: Props) => {
    const { close } = usePopup();

    return (
        <View style={popupStyles.layout}>
            <View style={style ? [popupStyles.container, style] : popupStyles.container}>
                {typeof children === 'function' ? children(close) : children}
            </View>
        </View>
    );
};

Popup.Header = ({ title }: HeaderProps) => {
    return <Title title={title} />;
};

Popup.Body = ({ children, style }: Props) => {
    const { close } = usePopup();

    return (
        <View style={style ? [popupStyles.body, style] : popupStyles.body}>
            {typeof children === 'function' ? children(close) : children}
        </View>
    );
};

Popup.Footer = ({ children, onClose, style }: FooterProps) => {
    const { close } = usePopup();

    const handleClose = () => {
        close();
        if (onClose) {
            onClose();
        }
    };

    return (
        <View style={style ? [popupStyles.footer, style] : popupStyles.footer}>
            {children}
            <IconButton
                icon="close-thick"
                onPress={handleClose}
                style={popupStyles.footerClose}
            />
        </View>
    );
};