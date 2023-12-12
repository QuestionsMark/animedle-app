import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../variables.styles";
import { componentsStyles } from "../components.styles";

export const profileStyles = StyleSheet.create({
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
        height: '100%',
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    statsItem: {
        ...componentsStyles.card,
        flexBasis: (Dimensions.get('screen').width - 70) / 3 - 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsItemTitle: {
        textAlign: 'center',
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '600',
    },
    statsItemValue: {
        color: SECONDARY_COLOR,
        fontSize: 18,
        fontWeight: '600',
    },

    // Change skin popup
    changeSkinItem: {
        width: '50%',
        padding: 5,
    },
    changeSkinItemLast: {
        marginBottom: 0,
    },
    changeSkinItemImage: {
        width: '100%',
        aspectRatio: 1 / 1,
        borderWidth: 5,
        borderColor: PRIMARY_COLOR,
        borderRadius: 20,
    },
    changeSkinItemImageActive: {
        borderColor: SECONDARY_COLOR,
    },
    changeSkinSubmit: {
        borderRadius: 40,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },

    // Generate skin
    generateSkinBody: {
        gap: 20,
    },
    generateSkinCoins: {
        ...componentsStyles.card,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 4,
    },
    generateSkinCoinsImage: {
        width: 50,
        aspectRatio: 1 / 1,
    },
    generateSkinCoinsValue: {
        color: PRIMARY_COLOR,
        fontSize: 30,
        fontWeight: '600',
    },
    generateSkinText: {
        ...componentsStyles.card,
        color: PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
    generateSkinBuy: {
        borderRadius: 30,
    },
});