import { StyleSheet } from "react-native";
import { PRIMARY_LIGHT_COLOR } from "../variables.styles";
import { componentsStyles } from "../components.styles";

export const welcomePopupStyles = StyleSheet.create({
    container: {
        gap: 30,
    },
    countdown: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 20,
    },
    countdownContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ad: {
        flex: 1,
    },
});