import { View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { profileStyles } from "../../styles";
import { useProfileInfo } from "../../contexts/profile.context";
import { Avatar } from "./Avatar";
import { Stats } from "./Stats";

export const Profile = () => {
    const { username } = useProfileInfo();

    return (
        <View style={profileStyles.container}>
            <ScreenHeader title={username} />
            <View style={profileStyles.content}>
                <Avatar />
                <Stats />
            </View>
        </View>
    );
};