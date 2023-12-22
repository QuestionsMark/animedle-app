import { Dimensions, View } from "react-native";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { animedleStyles } from "../../styles";

export const AdBanner = () => {
    return (
        <View style={animedleStyles.animedleAd}>
            <BannerAd
                size={`${Math.floor(Dimensions.get('screen').width - 70)}x${Math.floor((Dimensions.get('screen').width - 70) * 100 / 318)}`}
                unitId={TestIds.BANNER}
            />
        </View>
    );
};