import { Dimensions, StyleSheet } from "react-native";
import { componentsStyles } from "../components.styles";
import { INFO_COLOR, PRIMARY_COLOR, SUCCESS_COLOR, WARN_COLOR } from "../variables.styles";

export const animedleStyles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 94,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        gap: 20,
    },

    // Gues form
    guesForm: {
        position: 'relative',
        ...componentsStyles.card,
        zIndex: 1,
    },
    guesFormContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    guesFormAutocompletion: {
        flex: 1,
    },
    guesFormAutocompletionInput: {
        position: 'relative',
        zIndex: 1,
    },
    guesFormSubmit: {
        paddingVertical: 7,
        paddingHorizontal: 0,
        borderRadius: 16,
        minWidth: 0,
    },

    // Free hint
    freeHint: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 20,
    },
    freeHintContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    freeHintContentText: {
        color: PRIMARY_COLOR,
        fontSize: 16,
        fontWeight: '600',
    },
    freeHintList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 10,
    },
    freeHintItem: {
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 30,
    },
    freeHintItemText: {
        fontSize: 12,
    },

    // Gues content
    guesContent: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 20,
    },
    guesContentList: {
        width: '100%',
    },
    guesContentItem: {
        gap: 15,
        width: Dimensions.get('screen').width - 70,
        padding: 10,
        borderRadius: 8,
        marginRight: 15,
        backgroundColor: 'rgba(86, 72, 117, 0.1)',
    },
    guesContentItemLast: {
        marginRight: 0,
    },
    guesContentItemStar: {
        position: 'absolute',
        zIndex: 0,
    },
    guesContentItemStar1: {
        left: '4%',
        top: '-6%',
    },
    guesContentItemStar2: {
        left: '-1%',
        top: '38%',
    },
    guesContentItemStar3: {
        left: '4%',
        top: '80%',
    },
    guesContentItemStar5: {
        right: '4%',
        top: '-6%',
    },
    guesContentItemStar6: {
        right: '-1%',
        top: '38%',
    },
    guesContentItemStar7: {
        right: '4%',
        top: '80%',
    },
    guesContentItemTitle: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    guesContentItemTitleValue: {
        position: 'relative',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        zIndex: 1,
    },
    guesContentItemAnswears: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
    guesContentItemAnswear: {
        ...componentsStyles.card,
        flexBasis: (Dimensions.get('screen').width - 90) / 3 - 7,
        position: 'relative',
        minHeight: 70,
        padding: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    guesContentItemAnswearCorrect: {
        shadowColor: SUCCESS_COLOR,
        borderColor: SUCCESS_COLOR,
    },
    guesContentItemAnswearIncorrect: {
        shadowColor: WARN_COLOR,
        borderColor: WARN_COLOR,
    },
    guesContentItemAnswearAlmost: {
        shadowColor: INFO_COLOR,
        borderColor: INFO_COLOR,
    },
    guesContentItemAnswearText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },

    // Answear popup
    answearPopupBody: {
        gap: 30,
        paddingTop: 10,
    },
    answearPopupDescription: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 10,
    },
    answearPopupDescriptionValue: {
        width: '100%',
        color: PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
    answearPopupFault: {
        ...componentsStyles.card,
        alignItems: 'center',
        gap: 10,
    },
    answearPopupFaultValue: {
        width: '100%',
        color: PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: '600',
    },
});