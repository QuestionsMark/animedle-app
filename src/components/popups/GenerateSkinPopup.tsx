import { Image, Text, View } from "react-native";
import { SECONDARY_COLOR, profileStyles } from "../../styles";
import { Profile, RewardType, Reward } from "../../types";
import { Button } from "../common/Button";
import { Popup } from "../common/Popup";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { RewardedAdReward } from "react-native-google-mobile-ads";
import { useRewardedAd } from "../../hooks/useRewardedAd";
import { useProfile, useProfileInfo } from "../../contexts/profile.context";

export const GenerateSkinPopup = () => {
    const { setProfile } = useProfile();
    const { premiumCoins } = useProfileInfo();
    const { endLoading, setToast, startLoading } = usePromises();

    const handleSubmit = async (close: () => void) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Profile.ContextValue>(() => fetchTool('user/avatar', 'POST'));
        setTimeout(() => {
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Fetch failed!', text2: response.message });
            setProfile(response.results);
            close();
        }, delayTime);
    };

    const handleCoinsBuy = () => {
        setToast({ type: 'info', text1: 'Info', text2: 'Feature in development.' });
    };

    const onRewardEarn = async (reward: RewardedAdReward) => {
        const body: Reward = { type: RewardType.Coins, coins: reward.amount };
        const response = await fetchTool<Profile.ContextValue>('user/reward', 'PATCH', body);
        if (!response.status) return setToast({ type: 'error', text1: 'Fetch failed!', text2: response.message });
        setProfile(response.results);
    };

    const { isLoaded, show } = useRewardedAd({
        id: 'ca-app-pub-9239996671138242/6065711282',
        onRewardEarn,
    });

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
                    {premiumCoins >= 10 ? <Button
                        onPress={() => handleSubmit(close)}
                        style={profileStyles.changeSkinSubmit}
                        buttonColor={SECONDARY_COLOR}
                    >
                        Generate skin
                    </Button> : <Button
                        onPress={show}
                        style={profileStyles.changeSkinSubmit}
                        buttonColor={SECONDARY_COLOR}
                        disabled={!isLoaded}
                    >
                        {`Watch ${premiumCoins + 5 >= 10 ? '1 ad' : '2 ads'} to generate`}
                    </Button>}
                </Popup.Footer>
            </>)}
        </Popup>
    );
};