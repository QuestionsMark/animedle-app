import { Image, Linking, Text, View } from "react-native";
import { Button } from "../common/Button";
import { Popup } from "../common/Popup";
import { SECONDARY_COLOR, animedleStyles } from "../../styles";
// import { requestReview,  } from "expo-store-review";

export const ReviewRequestPopup = () => {
    return (
        <Popup>
            <Popup.Header title="Get Free Coins" />
            <Popup.Body style={animedleStyles.reviewRequestBody}>
                <View style={animedleStyles.reviewRequestContent}>
                    <Text style={animedleStyles.reviewRequestText}>
                        {'\t'}{'\t'}Welcome to the Animedle app! We are very pleased to see you. If you like this app, share your opinion with others!
                    </Text>
                    <Text style={animedleStyles.reviewRequestText}>
                        {'\t'}{'\t'}Rate our app with five stars and get additional 20 premium currency.
                    </Text>
                    <View style={animedleStyles.reviewRequestCoins}>
                        <Image source={require('../../assets/coin.png')} style={animedleStyles.reviewRequestCoinsImage} />
                        <Text style={animedleStyles.reviewRequestCoinsValue}>
                            20
                        </Text>
                    </View>
                </View>
                <Button
                    onPress={() => Linking.openURL(`https://play.google.com/store/apps/details?id=${process.env.EXPO_PUBLIC_APP_URL}&showAllReviews=true`)}
                    // onPress={requestReview}
                    style={animedleStyles.reviewRequestSubmit}
                    buttonColor={SECONDARY_COLOR}
                >
                    Review!
                </Button>
            </Popup.Body>
            <Popup.Footer />
        </Popup>
    );
};