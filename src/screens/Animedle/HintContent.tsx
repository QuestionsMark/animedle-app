import { Text, View } from "react-native";
import { useAnimedleInfo } from "../../contexts/animedle.context";

export const HintContent = () => {
    const { hint } = useAnimedleInfo().freeHint;

    return hint && (
        <View>
            <Text>{hint.value}</Text>
        </View>
    );
};