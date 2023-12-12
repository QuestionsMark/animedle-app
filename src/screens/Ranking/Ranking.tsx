import { View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { rankingStyles } from "../../styles";
import { lastDataElementRef } from "../../utils/api.util";
import { User } from "../../types";
import { useSearch } from "../../hooks/useSearch";
import { RankingList } from "./RankingList";
import { useEffect, useState } from "react";

const limit = 15;

export const Ranking = () => {
    const [refreshing, setRefreshing] = useState(false);
    const { amount, data, hasMore, loading, page, setPage, refresh } = useSearch<User.RankingItem>('user/top', 15, true);

    useEffect(() => {
        if (refreshing && !loading) {
            setRefreshing(false);
        };

    }, [loading, refreshing]);

    return (
        <View style={rankingStyles.container}>
            <ScreenHeader title="Ranking" />
            <View style={rankingStyles.content}>
                <RankingList
                    loadMoreData={() => lastDataElementRef(amount, hasMore, limit, loading, page, setPage)}
                    profiles={data}
                    refresh={refresh}
                    refreshing={refreshing}
                />
            </View>
        </View>
    );
};