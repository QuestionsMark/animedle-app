import { Animated } from "react-native";
import { loaderStyles } from "../../styles";
import { useEffect } from "react";
import { imageAnimation, imageHeight, imageWidth, loaderOpacity } from "../../animations/loader.animation";

export const Loader = () => {
    useEffect(() => {
        loaderOpacity.setValue(1);
        imageAnimation();
    }, []);

    return (
        <Animated.View style={{ ...loaderStyles.loader, opacity: loaderOpacity }}>
            <Animated.Image source={require('../../assets/logo.png')} style={{ width: imageWidth, height: imageHeight }} />
        </Animated.View>
    );
};