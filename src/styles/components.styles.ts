import { StyleSheet } from "react-native";
import { globalStyles } from "./global.styles";
import { PRIMARY_LIGHT_COLOR } from "./variables.styles";

export const componentsStyles = StyleSheet.create({
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
    cardWithoutShadow: {
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

    // Button
    buttonDisabled: {
        backgroundColor: '#ddd',
    },

    // Icon button
    iconButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: PRIMARY_LIGHT_COLOR,
        color: '#fff',
    },

    // Logo
    logo: {
        width: 140,
        height: 140,
    },
});