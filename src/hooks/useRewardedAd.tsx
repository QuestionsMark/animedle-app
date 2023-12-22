import { useEffect, useRef, useState } from "react";
import { AdEventType, RewardedAd, RewardedAdEventType, RewardedAdReward, TestIds } from "react-native-google-mobile-ads";

interface UseRewardAdOptions {
    id: string;
    onRewardEarn(reward: RewardedAdReward): void;
    onLoad?(): void;
}

export const useRewardedAd = ({ id, onRewardEarn, onLoad }: UseRewardAdOptions) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [flag, setFlag] = useState(false);

    const rewarded = useRef(RewardedAd.createForAdRequest(process.env.EXPO_PUBLIC_ENVIRONMENT === 'production' ? id : TestIds.GAM_REWARDED, {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    })).current;

    const show = () => rewarded.show();

    const refresh = () => {
        setIsLoaded(false);
        setFlag(state => !state);
    };

    useEffect(() => {
        const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, reward => {
            onRewardEarn(reward);
        });
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setIsLoaded(true)
            if (onLoad) {
                onLoad();
            }
        });
        const unsubscribeClosed = rewarded.addAdEventListener(AdEventType.CLOSED, () => {
            refresh();
        });
        const unsubscribeError = rewarded.addAdEventListener(AdEventType.ERROR, e => {
            console.warn(e);
            rewarded.load();
        });

        rewarded.load();

        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
            unsubscribeClosed();
            unsubscribeError();
        }
    }, [flag]);

    return { isLoaded, refresh, show };
};