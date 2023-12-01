import { StyleSheet } from "react-native";
import { componentsStyles } from "../components.styles";
import { globalStyles } from "../global.styles";
import { PRIMARY_COLOR } from "../variables.styles";

export const animedleStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 74,
    },
    content: {
        gap: 20,
        padding: 20,
    },

    // Gues input
    guesInput: {
        ...componentsStyles.card,
    },

    // Free hint
    freeHint: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 16,
    },
    freeHintItem: {
        // ...globalStyles.shadow,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 16,
        marginHorizontal: 5,
        color: PRIMARY_COLOR,
        backgroundColor: 'rgba(86, 72, 117, 0.2)',
        fontSize: 14,
        fontWeight: '600',
    },

    // Gues content
    guesContent: {
        ...componentsStyles.card,
        alignItems: 'center',
    },
});