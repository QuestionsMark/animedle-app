import { ViewStyle } from "react-native";
import { IconButton as RNPIconButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { componentsStyles } from "../../styles";

interface Props {
    onPress(): void;
    icon: IconSource;
    iconColor?: string;
    size?: number;
    style?: ViewStyle;
}

export const IconButton = ({ icon, onPress, iconColor, size, style }: Props) => {
    return (
        <RNPIconButton
            icon={icon}
            onPress={onPress}
            style={style ? [componentsStyles.iconButton, style] : componentsStyles.iconButton}
            iconColor={iconColor || '#fff'}
            size={size}
        />
    );
};