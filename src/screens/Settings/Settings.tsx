import { SettingsHome } from "./SettingsHome";
import { SettingsAccountDelete } from "./SettingsAccountDelete";
import { settingsStyles } from "../../styles";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { SettingsNav } from "./SettingsNav";
import { useSettings } from "../../contexts/settings.context";
import { ScreenHeader } from "../../components/layout/ScreenHeader";

export const Settings = () => {
    const { nav } = useSettings();

    const getScreen = () => {
        switch (nav) {
            case 'AccountDelete': {
                return <SettingsAccountDelete />
            }
            case 'Home': {
                return <SettingsHome />
            }
        }
    };

    return (
        <View style={settingsStyles.container}>
            <ScreenHeader title="Settings" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={settingsStyles.contentWrapper}>
                    <SettingsNav />
                    {getScreen()}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};