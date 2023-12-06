import { Dimensions, StyleSheet } from "react-native";
import { componentsStyles } from "../components.styles";

export const popupStyles = StyleSheet.create({
    layout: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 50,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        ...componentsStyles.card,
        position: 'relative',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: 20,
    },
    body: {
        flex: 1,
        width: '100%',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        height: 50,
        marginBottom: - 40,
    },
    footerClose: {
        width: 40,
        height: 40,
    }
});