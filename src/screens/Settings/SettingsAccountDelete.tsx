import { View } from "react-native";
import { settingsStyles } from "../../styles";
import { AccountDeleteForm } from "./AccountDeleteForm";

export const SettingsAccountDelete = () => {
    return (
        <View style={settingsStyles.accountDeleteContent}>
            <AccountDeleteForm />
        </View>
    );
};