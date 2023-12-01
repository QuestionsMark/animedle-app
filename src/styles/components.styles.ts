import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "./global.styles";

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

    // ScreenHeader
    screenHeader: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        padding: 20,
    },
    screenHeaderContent: {
        ...globalStyles.shadow,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'rgba(86, 72, 117, 0.2)',
        borderRadius: 16,
        backgroundColor: '#fff',
    },
    screenHeaderTitle: {
        ...globalStyles.titleFont,
        flex: 1,
        textAlign: 'center',
    },
    screenHeaderLineLeft: {
        width: 20,
        height: 2,
        backgroundColor: 'rgba(86, 72, 117, 0.2)',
    },
    screenHeaderLineRight: {
        width: 20,
        height: 2,
        backgroundColor: 'rgba(86, 72, 117, 0.2)',
    },

    // Card
    card: {
        ...globalStyles.shadow,
        padding: 15,
        borderRadius: 16,
        backgroundColor: '#fff',
    },

    // Title
    title: {
        ...globalStyles.shadow,
        ...globalStyles.titleFont,
        marginTop: -25,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
});