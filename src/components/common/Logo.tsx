import { Image, ImageStyle } from "react-native";
import { componentsStyles } from "../../styles";

interface Props {
    style?: ImageStyle
}

export const Logo = ({ style }: Props) => {
    return (
        <Image source={require('../../assets/logo.png')} style={style ? [componentsStyles.logo, style] : componentsStyles.logo} />
    );
};