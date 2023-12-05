import { View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { historyStyles } from "../../styles";
import { HistoryList } from "./HistoryList";

export const History = () => {
    return (
        <View style={historyStyles.container}>
            <ScreenHeader title="History" />
            <View style={historyStyles.content}>
                <HistoryList />
            </View>
        </View>
    );
};