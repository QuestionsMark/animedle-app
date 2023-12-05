import { Image, Text, View } from "react-native";
import { SECONDARY_COLOR, profileStyles } from "../../styles";
import { Profile } from "../../types";
import { Button } from "../common/Button";
import { Popup } from "../common/Popup";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Dispatch, SetStateAction } from "react";

interface Props {
    profileContext: Profile.ContextValue;
    setProfileContext: Dispatch<SetStateAction<Profile.ContextValue | null>>;
}

export const GenerateSkinPopup = ({ profileContext, setProfileContext }: Props) => {
    const { premiumCoins } = profileContext;
    const { endLoading, setToast, startLoading } = usePromises();

    const handleSubmit = async (close: () => void) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Profile.ContextValue>(() => fetchTool('user/avatar', 'POST'));
        setTimeout(() => {
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Fetch failed!', text2: response.message });
            setProfileContext(response.results);
            close();
        }, delayTime);
    };

    const handleCoinsBuy = () => {
        setToast({ type: 'info', text1: 'Info', text2: 'Feature in development.' });
    };

    return (
        <Popup>
            {(close) => (<>
                <Popup.Header title="Generate new skin" />
                <Popup.Body style={profileStyles.generateSkinBody}>
                    <View style={profileStyles.generateSkinCoins}>
                        <Image source={require('../../assets/coin.png')} style={profileStyles.generateSkinCoinsImage} />
                        <Text style={profileStyles.generateSkinCoinsValue}>
                            {premiumCoins}
                        </Text>
                    </View>
                    <Text style={profileStyles.generateSkinText}>
                        Every skin generation costs 10 coins. You can gain coins by solving animedle or by purchasing them.
                    </Text>
                    <Button onPress={handleCoinsBuy} style={profileStyles.generateSkinBuy}>
                        Buy coins
                    </Button>
                </Popup.Body>
                <Popup.Footer>
                    <Button
                        onPress={() => handleSubmit(close)}
                        style={profileStyles.changeSkinSubmit}
                        buttonColor={SECONDARY_COLOR}
                        disabled={premiumCoins < 10}
                    >
                        Generate skin
                    </Button>
                </Popup.Footer>
            </>)}
        </Popup>
    );
};