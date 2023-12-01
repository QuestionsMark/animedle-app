import { FlatList } from "react-native";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { HintItem } from "./HintItem";

export const HintsToChoose = () => {
    const { hintsToChoose } = useAnimedleInfo().freeHint;

    return (
        <FlatList
            data={hintsToChoose}
            renderItem={({ item }) => <HintItem item={item} />}
            keyExtractor={(hint) => hint}
            horizontal
        />
    );
};