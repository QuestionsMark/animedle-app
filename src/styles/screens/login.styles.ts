import { StyleSheet } from "react-native";
import { globalStyles } from "../global.styles";

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(86, 72, 117, 0.01)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    form: {
        ...globalStyles.shadow,
        gap: 30,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 16,
        backgroundColor: '#fff',
    },
    formContent: {
        gap: 15,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        flex: undefined,
        width: '100%',
    },
    submit: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 30,
    },
});