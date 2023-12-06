import { View } from "react-native";
import { animedleStyles } from "../../styles";
import { Title } from "../../components/common/Title";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { HintContent } from "./HintContent";
import { HintsToChoose } from "./HintsToChoose";

export const FreeHint = () => {
    const { hint } = useAnimedleInfo().freeHint;

    return (
        <View style={animedleStyles.freeHint}>
            <Title title="Free Hint" />
            {hint ? <HintContent /> : <HintsToChoose />}
        </View>
    );
};