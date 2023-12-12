import { Pressable } from "react-native";
import { profileStyles } from "../../styles";
import { URLImage } from "../../components/common/URLImage";

interface Props {
    handleSkinChoose(skin: string): void;
    isActive: boolean;
    item: string;
    last: boolean;
    refference?(node: any): void;
}

export const SkinItem = ({ handleSkinChoose, isActive, item, last, refference }: Props) => {
    return (
        <Pressable ref={refference ?? null} onPress={() => handleSkinChoose(item)} style={last ? [profileStyles.changeSkinItem, profileStyles.changeSkinItemLast] : profileStyles.changeSkinItem}>
            <URLImage id={item} style={isActive ? [profileStyles.changeSkinItemImage, profileStyles.changeSkinItemImageActive] : profileStyles.changeSkinItemImage as any} />
        </Pressable>
    );
};