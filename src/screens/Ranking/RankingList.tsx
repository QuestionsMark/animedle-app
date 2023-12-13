import { FlatList } from "react-native";
import { User } from "../../types";
import { RankingItem } from "./RankingItem";
import { rankingStyles } from "../../styles";

interface Props {
    loadMoreData(): void;
    profiles: User.RankingItem[];
    refresh(): void;
    refreshing: boolean;
}

export const RankingList = ({ loadMoreData, profiles, refresh, refreshing }: Props) => {
    return (
        <FlatList
            data={profiles}
            renderItem={({ index, item }) => <RankingItem index={index} item={item} />}
            keyExtractor={({ id }) => id}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.2}
            refreshing={refreshing}
            onRefresh={refresh}
            style={rankingStyles.content}
            contentContainerStyle={rankingStyles.scrollContent}
        />
    );
};