import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { animedleStyles } from "../../styles";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { GuesInput } from "./GuesInput";
import { FreeHint } from "./FreeHint";
import { GuesContent } from "./GuesContent";
import { useAnimedleInfo } from "../../contexts/animedle.context";

export const Animedle = () => {
    const { gueses } = useAnimedleInfo();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={animedleStyles.container}>
                <ScreenHeader title="Animedle" />
                <View style={animedleStyles.content}>
                    <GuesInput />
                    <FreeHint />
                    {gueses.length !== 0 && <GuesContent />}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};