import { View } from "react-native";
import { profileStyles } from "../../styles";
import { useProfile, useProfileInfo } from "../../contexts/profile.context";
import { URLImage } from "../../components/common/URLImage";
import { IconButton } from "../../components/common/IconButton";
import { usePopup } from "../../contexts/popup.context";
import { ChangeSkinPopup } from "../../components/popups/ChangeSkinPopup";
import { GenerateSkinPopup } from "../../components/popups/GenerateSkinPopup";

export const Avatar = () => {
    const { open } = usePopup();
    const { setProfile } = useProfile();
    const profileContext = useProfileInfo();

    const handleAvatarGenerate = async () => {
        open(<GenerateSkinPopup profileContext={profileContext} setProfileContext={setProfile} />);
    };

    const handleOpenSkins = () => {
        open(<ChangeSkinPopup profileContext={profileContext} setProfileContext={setProfile} />);
    };

    return (
        <View style={profileStyles.avatar}>
            <URLImage id={profileContext.avatar} style={profileStyles.avatarImage} />
            <View style={profileStyles.avatarButtons}>
                <IconButton icon="cog" onPress={handleOpenSkins} size={28} />
                <IconButton icon="refresh" onPress={handleAvatarGenerate} size={28} />
            </View>
        </View>
    );
};