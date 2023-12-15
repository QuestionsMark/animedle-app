import { Dimensions, StyleSheet } from "react-native";

export const loaderStyles = StyleSheet.create({
    loader: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        zIndex: 1000,
        paddingBottom: 80,
    },
});