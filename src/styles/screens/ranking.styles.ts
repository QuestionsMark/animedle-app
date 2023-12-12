import { StyleSheet } from "react-native";
import { componentsStyles } from "../components.styles";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../variables.styles";

export const rankingStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 74,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        gap: 20,
        height: '100%',
    },
    item: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 10,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    itemImg: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderColor: PRIMARY_COLOR,
        borderRadius: 35,
    },
    itemUsername: {
        flex: 1,
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '600',
    },
    itemStats: {
        flexDirection: 'row',
        gap: 10,
    },
    itemStat: {
        ...componentsStyles.card,
        width: 70,
        height: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemStatTitle: {
        textAlign: 'center',
        color: PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
    itemStatValue: {
        color: SECONDARY_COLOR,
        fontSize: 16,
        fontWeight: '600',
    },
});