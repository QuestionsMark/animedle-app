import { SettingsProvider } from "../../contexts/settings.context";
import { Settings } from "./Settings";

export const SettingsScreen = () => {
    return (
        <SettingsProvider>
            <Settings />
        </SettingsProvider>
    );
};