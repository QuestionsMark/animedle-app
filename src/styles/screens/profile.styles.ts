import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../variables.styles";

export const profileStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 74,
    },
    content: {
        flex: 1,
        gap: 20,
        padding: 20,
    },

    // Avatar
    avatar: {
        position: 'relative',
    },
    avatarButtons: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    avatarImage: {
        width: Dimensions.get('screen').width - 40,
        height: Dimensions.get('screen').width - 40,
        borderWidth: 6,
        borderColor: PRIMARY_COLOR,
        borderRadius: Dimensions.get('screen').width - 40,
    },

    // Statistics
    stats: {
        flex: 1,
        alignItems: 'center',
        gap: 16,
    },
    statsList: {
        gap: 10,
        width: '100%',
    },
    statsItem: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY_COLOR,
    },
    statsItemTitle: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '600',
    },
    statsItemValue: {
        color: SECONDARY_COLOR,
        fontSize: 18,
        fontWeight: '600',
    },
});