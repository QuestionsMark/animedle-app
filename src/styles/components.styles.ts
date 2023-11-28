import { Dimensions, StyleSheet } from "react-native";

export const componentsStyles = StyleSheet.create({
    //Loader
    loader: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
});