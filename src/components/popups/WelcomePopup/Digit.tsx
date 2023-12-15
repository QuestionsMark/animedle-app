import { Text, View } from "react-native";
import { componentsStyles } from "../../../styles";

interface Props {
    value: number;
}

export const Digit = ({ value }: Props) => {
    return (
        <View style={componentsStyles.countdownDigit}>
            <Text style={componentsStyles.countdownDigitValue}>
                {value < 10 ? '0' + value : value}
            </Text>
        </View>
    );
};