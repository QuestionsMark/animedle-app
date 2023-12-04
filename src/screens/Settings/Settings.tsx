import { Text, View } from "react-native";
import { Button } from "../../components/common/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchTool } from "../../utils/api.util";
import * as SecureStore from "expo-secure-store";
import { Auth } from "../../types";
import { useUser } from "../../contexts/user.context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabList } from "../../components/layout/ScreenManager";
import { PRIMARY_COLOR } from "../../styles";

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
        <View>
            <Text>Settings</Text>
            <Button onPress={handleLogout}>
                <MaterialCommunityIcons name="power" size={26} color={PRIMARY_COLOR} />
            </Button>
        </View>
    );
};