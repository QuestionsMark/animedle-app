import { Text, View, ViewStyle } from "react-native";
import { componentsStyles, historyStyles } from "../../styles";
import { Animedle } from "../../types";

interface Props {
    item: Animedle.Item;
}

export const HistoryItem = ({ item }: Props) => {
    const { solved, title, trials, withHint } = item;

    const style: ViewStyle[] = [componentsStyles.cardWithoutShadow, historyStyles.item];
    if (solved) {
        style.push(historyStyles.itemCorrect);
    }

    return (
        <View style={style}>
            <Text style={historyStyles.itemTitle}>
                {title}
            </Text>
            <View style={historyStyles.itemStats}>
                <View style={historyStyles.itemStat}>
                    <Text style={historyStyles.itemStatTitle}>
                        Trials:
                    </Text>
                    <Text style={historyStyles.itemStatValue}>
                        {trials}
                    </Text>
                </View>
                <View style={historyStyles.itemStat}>
                    <Text style={historyStyles.itemStatTitle}>
                        Hint used:
                    </Text>
                    <Text style={historyStyles.itemStatValue}>
                        {withHint || '-'}
                    </Text>
                </View>
            </View>
        </View>
    );
};