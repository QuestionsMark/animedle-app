import { View } from "react-native";
import { profileStyles } from "../../styles";
import { useProfileInfo } from "../../contexts/profile.context";
import { URLImage } from "../../components/common/URLImage";
import { IconButton } from "../../components/common/IconButton";

export const Avatar = () => {
    const { avatar } = useProfileInfo();

    const handleAvatarGenerate = async () => {
        console.log('generujemy');
    };

    const handleOpenSkins = () => {
        console.log('Skinki');
    };

    return (
        <View style={profileStyles.avatar}>
            <URLImage id={avatar} style={profileStyles.avatarImage} />
            <View style={profileStyles.avatarButtons}>
                <IconButton icon="cog" onPress={handleOpenSkins} size={28} />
                <IconButton icon="refresh" onPress={handleAvatarGenerate} size={28} />
            </View>
        </View>
    );
};