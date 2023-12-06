import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, SUCCESS_COLOR, WARN_COLOR } from "../variables.styles";

export const historyStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 74,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    scrollContent: {
        gap: 15,
    },
    item: {
        gap: 10,
        borderWidth: 2,
        borderColor: WARN_COLOR,
    },
    itemCorrect: {
        borderColor: SUCCESS_COLOR,
    },
    itemTitle: {
        color: PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
    itemStats: {
        gap: 4,
        width: '100%',
    },
    itemStat: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY_COLOR,
    },
    itemStatTitle: {
        color: PRIMARY_COLOR,
        fontSize: 12,
        fontWeight: '600',
    },
    itemStatValue: {
        color: SECONDARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
});