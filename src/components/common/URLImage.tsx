import { Image, ImageStyle } from "react-native";

interface Props {
    id: string;
    style?: ImageStyle;
}

export const URLImage = ({ id, style }: Props) => {
    return (
        <Image style={style} source={{ uri: `${process.env.EXPO_PUBLIC_HOST_ADDRESS}/file/${id}` }} />
    );
};