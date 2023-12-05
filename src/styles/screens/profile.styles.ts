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

    // Change skin popup
    changeSkin: {
        padding: 10,
    },
    changeSkinItem: {
        marginBottom: 20,
    },
    changeSkinItemLast: {
        marginBottom: 0,
    },
    changeSkinItemImage: {
        width: '100%',
        aspectRatio: 1 / 1,
        borderWidth: 6,
        borderColor: PRIMARY_COLOR,
        borderRadius: Dimensions.get('screen').width - 70,
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