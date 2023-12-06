import { Text, View } from "react-native";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { animedleStyles } from "../../styles";

export const HintContent = () => {
    const { hint } = useAnimedleInfo().freeHint;

    return hint && (
        <View style={animedleStyles.freeHintContent}>
            <Text style={animedleStyles.freeHintContentText}>{hint.type}: {hint.value}</Text>
        </View>
    );
};