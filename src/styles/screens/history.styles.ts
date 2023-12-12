import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_COLOR, PRIMARY_LIGHT_COLOR, SECONDARY_COLOR, SUCCESS_COLOR, WARN_COLOR } from "../variables.styles";
import { componentsStyles } from "../components.styles";

export const historyStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 74,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        gap: 15,
    },
    item: {
        ...componentsStyles.card,
        gap: 15,
    },
    itemCorrect: {
        // borderColor: SUCCESS_COLOR,
    },
    itemTitle: {
        color: WARN_COLOR,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
    },
    itemTitleCorrect: {
        color: SUCCESS_COLOR,
    },
    itemStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
    },
    itemStat: {
        ...componentsStyles.card,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: (Dimensions.get('screen').width - 70) / 3 - 7,
        paddingHorizontal: 8,
        paddingVertical: 15,
    },
    itemStatTitle: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    itemStatValue: {
        color: SECONDARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
});