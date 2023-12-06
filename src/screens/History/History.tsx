import { RefreshControl, ScrollView, View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { historyStyles } from "../../styles";
import { HistoryList } from "./HistoryList";
import { usePromises } from "../../contexts/promises.context";
import { useHistory } from "../../contexts/history.context";
import { useState } from "react";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { History as HistoryNamespace } from "../../types";

export const History = () => {
    const { setToast } = usePromises();
    const { setHistory } = useHistory();

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        const { delayTime, response } = await minimalDelayFunction<HistoryNamespace.ContextValue>(() => fetchTool('user/history'));
        setTimeout(() => {
            setRefreshing(false);
            if (!response.status) {
                setHistory(null);
                setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                return;
            };
            setHistory(response.results);
        }, delayTime);
    };

    return (
        <View style={historyStyles.container}>
            <ScreenHeader title="History" />
            <View style={historyStyles.content}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    contentContainerStyle={historyStyles.scrollContent}
                >
                    <HistoryList />
                </ScrollView>
            </View>
        </View>
    );
};