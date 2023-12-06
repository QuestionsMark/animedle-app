import { useHistoryInfo } from "../../contexts/history.context";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = () => {
    const { animedles } = useHistoryInfo();

    const historyList = () => {
        return animedles.map(a => <HistoryItem item={a} />);
    };

    return historyList();
};