import { ReactNode } from "react";
import { Button as RNPButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { PRIMARY_LIGHT_COLOR } from "../../styles";

interface Props {
    onPress(): void;
    children?: ReactNode;
    style?: any;
    icon?: IconSource;
    textColor?: string;
    buttonColor?: string;
    disabled?: boolean;
}

export const Button = ({ onPress, buttonColor, children, disabled, icon, style, textColor }: Props) => {
    return (
        <RNPButton
            onPress={onPress}
            textColor={textColor || "#fff"}
            buttonColor={buttonColor || PRIMARY_LIGHT_COLOR}
            icon={icon}
            style={style}
            disabled={disabled}
        >
            {children}
        </RNPButton>
    );
};