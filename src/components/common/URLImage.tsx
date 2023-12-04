import { Image, ImageStyle } from "react-native";
import { HOST_ADDRESS } from "../../../config/config";

interface Props {
    id: string;
    style?: ImageStyle;
}

export const URLImage = ({ id, style }: Props) => {
    return (
        <Image style={style} source={{ uri: `${HOST_ADDRESS}/file/${id}` }} />
    );
};