import { FlatList } from "react-native";
import { Animedle } from "../../types";
import { HistoryItem } from "./HistoryItem";
import { historyStyles } from "../../styles";

interface Props {
    loadMoreData(): void;
    animedles: Animedle.Item[];
    refresh(): void;
    refreshing: boolean;
}

export const HistoryList = ({ animedles, loadMoreData, refresh, refreshing }: Props) => {
    return (
        <FlatList
            data={animedles}
            renderItem={({ item }) => <HistoryItem item={item} />}
            keyExtractor={({ id }) => id}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.2}
            refreshing={refreshing}
            onRefresh={refresh}
            style={historyStyles.content}
            contentContainerStyle={historyStyles.scrollContent}
        />
    );
};