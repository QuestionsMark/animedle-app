import { StyleSheet } from "react-native";
import { componentsStyles } from "../components.styles";

export const settingsStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 94,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    contentWrapper: {
        ...componentsStyles.card,
        flex: 1,
        padding: 0,
        overflow: 'hidden',
    },
    nav: {
        flexDirection: 'row',
    },
    navItem: {
        flexBasis: '50%',
        paddingVertical: 10,
        borderRadius: 0,
    },

    // Home
    homeContent: {
        flex: 1,
        gap: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    power: {
        width: 100,
        height: 100,
    },

    // Account Delete
    accountDeleteContent: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountDeleteForm: {
        gap: 20,
        width: '100%',
    },
    accountDeleteFormInput: {
        flex: undefined,
    },
    accountDeleteFormSubmit: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 30,
    },
});