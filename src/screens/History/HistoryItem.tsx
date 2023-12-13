import { Text, View, TextStyle } from "react-native";
import { historyStyles } from "../../styles";
import { Animedle } from "../../types";
import { FormattedDate } from "react-intl";

interface Props {
    item: Animedle.Item;
}

export const HistoryItem = ({ item }: Props) => {
    const { solved, title, tries, withHint, createdAt } = item;

    const style: TextStyle[] = [historyStyles.itemTitle];
    if (solved) {
        style.push(historyStyles.itemTitleCorrect);
    }

    return (
        <View style={historyStyles.item}>
            <Text style={style}>
                {title}
            </Text>
            <View style={historyStyles.itemStats}>
                <View style={historyStyles.itemStat}>
                    <Text style={historyStyles.itemStatTitle}>
                        Date
                    </Text>
                    <Text style={historyStyles.itemStatValue}>
                        <FormattedDate
                            value={createdAt}
                            day="numeric"
                            month="short"
                        />
                    </Text>
                </View>
                <View style={historyStyles.itemStat}>
                    <Text style={historyStyles.itemStatTitle}>
                        Tries
                    </Text>
                    <Text style={historyStyles.itemStatValue}>
                        {tries}/10
                    </Text>
                </View>
                <View style={historyStyles.itemStat}>
                    <Text style={historyStyles.itemStatTitle}>
                        Hint
                    </Text>
                    <Text style={historyStyles.itemStatValue}>
                        {withHint || '-'}
                    </Text>
                </View>
            </View>
        </View>
    );
};