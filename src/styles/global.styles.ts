import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "./variables.styles";

export const globalStyles = StyleSheet.create({
    app: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },

    // Common
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    titleFont: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
});