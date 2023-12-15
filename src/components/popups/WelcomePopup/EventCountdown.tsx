import { View } from "react-native";
import { welcomePopupStyles } from "../../../styles";
import { Title } from "../../common/Title";
import { CountDown } from "./CountDown";
import { usePopup } from "../../../contexts/popup.context";

export const EventCountdown = () => {
    const { close } = usePopup();

    const handleFinish = () => {
        // close();
        // navigation.navigate('History');
    };

    return (
        <View style={welcomePopupStyles.countdown}>
            <Title title="Next event in" />
            <View style={welcomePopupStyles.countdownContent}>
                <CountDown date={new Date(+(new Date()) + (1 * 60 + 12) * 1000)} onFinish={handleFinish} />
            </View>
        </View>
    );
};