import { RefreshControl, ScrollView, View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { profileStyles } from "../../styles";
import { useProfile, useProfileInfo } from "../../contexts/profile.context";
import { Avatar } from "./Avatar";
import { Stats } from "./Stats";
import { usePromises } from "../../contexts/promises.context";
import { useState } from "react";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Profile as ProfileNamespace } from "../../types";

export const Profile = () => {
    const { setToast } = usePromises();
    const { setProfile } = useProfile();
    const { username } = useProfileInfo();

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        const { delayTime, response } = await minimalDelayFunction<ProfileNamespace.ContextValue>(() => fetchTool('user/profile'));
        setTimeout(() => {
            setRefreshing(false);
            if (!response.status) {
                setProfile(null);
                setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                return;
            };
            setProfile(response.results);
        }, delayTime);
    };

    return (
        <View style={profileStyles.container}>
            <ScreenHeader title={username} />
            <View style={profileStyles.content}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    contentContainerStyle={profileStyles.scrollContent}
                >
                    <Avatar />
                    <Stats />
                </ScrollView>
            </View>
        </View>
    );
};