import { View } from "react-native";
import { useSettings } from "../../contexts/settings.context";
import { Button } from "../../components/common/Button";
import { PRIMARY_COLOR, PRIMARY_LIGHT_COLOR, settingsStyles } from "../../styles";

export const SettingsNav = () => {
    const { nav, setNav } = useSettings();

    return (
        <View style={settingsStyles.nav}>
            <Button
                onPress={() => setNav('Home')}
                style={settingsStyles.navItem}
                buttonColor={nav === 'Home' ? PRIMARY_COLOR : PRIMARY_LIGHT_COLOR}
            >
                Log out
            </Button>
            <Button
                onPress={() => setNav('AccountDelete')}
                style={settingsStyles.navItem}
                buttonColor={nav === 'AccountDelete' ? PRIMARY_COLOR : PRIMARY_LIGHT_COLOR}
            >
                Delete Account
            </Button>
        </View>
    );
};