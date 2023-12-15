import { View } from "react-native";
import { IconButton } from "../../components/common/IconButton";
import { settingsStyles } from "../../styles";
import { useUser } from "../../contexts/user.context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabList } from "../../components/layout/ScreenManager";
import { fetchTool } from "../../utils/api.util";
import * as SecureStore from "expo-secure-store";
import { Auth } from "../../types";

export const SettingsHome = () => {
    const { setUser } = useUser();
    const { navigate } = useNavigation<NavigationProp<TabList>>();

    const handleLogout = async () => {
        await fetchTool('auth/logout');
        await SecureStore.deleteItemAsync(Auth.SecureStoreKey.Auth);
        setUser(null);
        navigate('Login');
    };

    return (
        <View style={settingsStyles.homeContent}>
            <IconButton onPress={handleLogout} icon="power" size={50} style={settingsStyles.power} />
        </View>
    );
};