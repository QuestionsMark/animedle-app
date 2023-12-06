import { Text, View, ViewStyle } from "react-native";
import { animedleStyles } from "../../styles";
import { Gues } from "../../types";
import { AnswearItem } from "./AnswearItem";
import { GuesItemCorrect } from "./GuesItemCorrect";

interface Props {
    item: Gues.Response;
    last: boolean;
}

export const GuesItem = ({ item, last }: Props) => {
    const { answears, isCorrect, title } = item;

    const style: ViewStyle[] = [animedleStyles.guesContentItem];
    if (last) {
        style.push(animedleStyles.guesContentItemLast);
    }

    const answearsList = () => {
        return answears.map((a, i) => <AnswearItem key={String(i)} item={a} />);
    };

    return (
        <View style={style}>
            <View style={animedleStyles.guesContentItemTitle}>
                {isCorrect && <GuesItemCorrect />}
                <Text style={animedleStyles.guesContentItemTitleValue}>{title}</Text>
            </View>
            <View style={animedleStyles.guesContentItemAnswears}>
                {answearsList()}
            </View>
        </View>
    );
};