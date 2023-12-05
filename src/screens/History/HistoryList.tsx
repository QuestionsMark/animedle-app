import { FlatList } from "react-native";
import { useHistoryInfo } from "../../contexts/history.context";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = () => {
    const { animedles } = useHistoryInfo();

    return (
        <FlatList
            data={animedles}
            renderItem={({ index, item }) => <HistoryItem item={item} last={index === animedles.length - 1} />}
            keyExtractor={({ id }) => id}
        />
    );
};