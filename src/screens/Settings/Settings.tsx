import { View } from "react-native";
import { fetchTool } from "../../utils/api.util";
import * as SecureStore from "expo-secure-store";
import { Auth } from "../../types";
import { useUser } from "../../contexts/user.context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabList } from "../../components/layout/ScreenManager";
import { settingsStyles } from "../../styles";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { IconButton } from "../../components/common/IconButton";

export const Settings = () => {
    const { setUser } = useUser();
    const { navigate } = useNavigation<NavigationProp<TabList>>();

    const handleLogout = async () => {
        await fetchTool('auth/logout');
        await SecureStore.deleteItemAsync(Auth.SecureStoreKey.Auth);
        setUser(null);
        navigate('Login');
    };

    return (
        <View style={settingsStyles.container}>
            <ScreenHeader title="Settings" />
            <View style={settingsStyles.content}>
                <IconButton onPress={handleLogout} icon="power" size={50} style={settingsStyles.power} />
            </View>
        </View>
    );
};