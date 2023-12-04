import { View } from "react-native";
import { animedleStyles } from "../../styles";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { GuesForm } from "./GuesForm";
import { FreeHint } from "./FreeHint";
import { GuesContent } from "./GuesContent";
import { useAnimedleInfo } from "../../contexts/animedle.context";

export const Animedle = () => {
    const { gueses } = useAnimedleInfo();

    return (
        <View style={animedleStyles.container}>
            <ScreenHeader title="Animedle" />
            <View style={animedleStyles.content}>
                <GuesForm />
                <FreeHint />
                {gueses.length !== 0 && <GuesContent />}
            </View>
        </View>
    );
};