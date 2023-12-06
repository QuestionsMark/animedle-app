import { View } from "react-native";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { HintItem } from "./HintItem";
import { animedleStyles } from "../../styles";

export const HintsToChoose = () => {
    const { hintsToChoose } = useAnimedleInfo().freeHint;

    const hintsList = () => {
        return hintsToChoose.map(h => <HintItem key={h} item={h} />);
    };

    return (
        <View style={animedleStyles.freeHintList}>
            {hintsList()}
        </View>
    );
};