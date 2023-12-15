import { Popup } from "../../common/Popup";
import { WelcomeAd } from "./WelcomeAd";
import { welcomePopupStyles } from "../../../styles";
import { useUser } from "../../../contexts/user.context";
import { EventCountdown } from "./EventCountdown";

export const WelcomePopup = () => {
    const { setIsWelcomePopupVisible } = useUser();

    return (
        <Popup style={welcomePopupStyles.container}>
            <Popup.Header title="Welcome!" />
            <Popup.Body>
                <EventCountdown />
                <WelcomeAd />
            </Popup.Body>
            <Popup.Footer onClose={() => setIsWelcomePopupVisible(false)} />
        </Popup>
    );
};