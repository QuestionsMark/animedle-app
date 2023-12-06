import { Pressable, Text, ViewStyle } from "react-native";
import { animedleStyles } from "../../styles";
import { Animedle } from "../../types";
import { usePopup } from "../../contexts/popup.context";
import { AnswearInfoPopup } from "../../components/popups/AnswearInfoPopup";

interface Props {
    item: Animedle.Answear;
}

export const AnswearItem = ({ item }: Props) => {
    const { correctness, guesAnswear } = item;

    const { open } = usePopup();

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
        <Pressable
            style={[animedleStyles.guesContentItemAnswear, getCorrectnessStyle()]}
            onPress={() => open(<AnswearInfoPopup item={item} />)}
        >
            <Text style={animedleStyles.guesContentItemAnswearText}>
                {guesAnswear}
            </Text>
        </Pressable>
    );
};