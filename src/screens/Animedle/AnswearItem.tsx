import { Text, View, ViewStyle } from "react-native";
import { animedleStyles } from "../../styles";
import { Animedle } from "../../types";

interface Props {
    item: Animedle.Answear;
}

export const AnswearItem = ({ item }: Props) => {
    const { correctness, guesAnswear } = item;

    const getCorrectnessStyle = (): ViewStyle => {
        switch (correctness) {
            case Animedle.Correctness.Almost: {
                return animedleStyles.guesContentItemAnswearAlmost;
            }
            case Animedle.Correctness.Correct: {
                return animedleStyles.guesContentItemAnswearCorrect;
            }
            case Animedle.Correctness.Incorrect: {
                return animedleStyles.guesContentItemAnswearIncorrect;
            }
        }
    }

    return (
        <View style={[animedleStyles.guesContentItemAnswear, getCorrectnessStyle()]}>
            <Text style={animedleStyles.guesContentItemAnswearText}>
                {guesAnswear}
            </Text>
        </View>
    );
};