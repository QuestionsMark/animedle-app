import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { PRIMARY_LIGHT_COLOR, componentsStyles } from "../../styles";

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
    const styles: ViewStyle[] = [];
    if (style) {
        styles.push(style);
    }
    if (disabled) {
        styles.push(componentsStyles.buttonDisabled);
    }

    return (
        <RNPButton
            onPress={onPress}
            textColor={textColor || "#fff"}
            buttonColor={buttonColor || PRIMARY_LIGHT_COLOR}
            icon={icon}
            style={styles}
            disabled={disabled}
            mode="contained"
        >
            {children}
        </RNPButton>
    );
};