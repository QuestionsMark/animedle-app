import { HistoryProvider, useHistory } from "../../contexts/history.context";
import { History } from "./History";

export const HistoryScreen = () => {
    return (
        <HistoryProvider>
            <HistoryScreen.Guard />
        </HistoryProvider>
    );
};

HistoryScreen.Guard = () => {
    const { history } = useHistory();

    return history && <History />;
};