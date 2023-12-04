import { componentsStyles } from "../../styles";
import { IconButton as RNPIconButton } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

interface Props {
    onPress(): void;
    icon: IconSource;
    iconColor?: string;
    size?: number;
}

export const IconButton = ({ icon, onPress, iconColor, size }: Props) => {
    return (
        <RNPIconButton
            icon={icon}
            onPress={onPress}
            style={componentsStyles.iconButton}
            iconColor={iconColor || '#fff'}
            size={size}
        />
    );
};