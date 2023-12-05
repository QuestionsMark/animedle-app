import { Animated, Easing } from "react-native";

export const imageWidth = new Animated.Value(120);
export const imageHeight = new Animated.Value(120);

export const imageAnimation = () => Animated.loop(
    Animated.parallel([
        Animated.sequence([
            Animated.timing(imageWidth, {
                toValue: 140,
                duration: 250,
                useNativeDriver: false,
                easing: Easing.linear,
            }),
            Animated.timing(imageWidth, {
                toValue: 120,
                duration: 250,
                useNativeDriver: false,
                easing: Easing.linear,
            }),
        ]),
        Animated.sequence([
            Animated.timing(imageHeight, {
                toValue: 140,
                duration: 250,
                useNativeDriver: false,
                easing: Easing.linear,
            }),
            Animated.timing(imageHeight, {
                toValue: 120,
                duration: 250,
                useNativeDriver: false,
                easing: Easing.linear,
            }),
        ])
    ]),
).start();

export const loaderOpacity = new Animated.Value(1);

export const hideLoader = () => Animated.timing(loaderOpacity, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
    easing: Easing.ease,
}).start();