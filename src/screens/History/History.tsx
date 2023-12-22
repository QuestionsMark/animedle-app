import { View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { historyStyles } from "../../styles";
import { HistoryList } from "./HistoryList";
import { useEffect, useState } from "react";
import { lastDataElementRef } from "../../utils/api.util";
import { Animedle } from "../../types";
import { useSearch } from "../../hooks/useSearch";

const limit = 20;

export const History = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { amount, data, hasMore, loading, page, setPage, refresh } = useSearch<Animedle.Item>('user/history', limit, true);

    useEffect(() => {
        if (refreshing && !loading) {
            setRefreshing(false);
        };
    }, [loading, refreshing]);

    return (
        <View style={historyStyles.container}>
            <ScreenHeader title="History" />
            <View style={historyStyles.content}>
                <HistoryList
                    loadMoreData={() => lastDataElementRef(amount, hasMore, limit, loading, page, setPage)}
                    animedles={data}
                    refresh={refresh}
                    refreshing={refreshing}
                />
            </View>
        </View>
    );
};