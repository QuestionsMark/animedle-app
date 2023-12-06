import { Text, View } from "react-native";
import { Animedle } from "../../types";
import { Popup } from "../common/Popup";
import { animedleStyles } from "../../styles";
import { Title } from "../common/Title";

interface Props {
    item: Animedle.Answear;
}

const ANSWEARS_INFO: { [key: string]: Animedle.AnswearInfo } = {
    [Animedle.HintType.AverageScore]: {
        title: 'Average Score',
        description: 'Average score from anilist data provider in 0-10 scale.',
        errorTolerance: {
            correct: 'Exact value rounded to one digit after the decimal point.',
            almost: 'Value that is within the error tolerance of 0.5.',
        },
    },
    [Animedle.HintType.Episodes]: {
        title: 'Episodes Amount',
        description: 'Number of anime episodes.',
        errorTolerance: {
            correct: 'The exact value of anime episodes.',
            almost: 'No error tolerance.',
        },
    },
    [Animedle.HintType.FamiliarAnime]: {
        title: 'Related Anime',
        description: 'Anime that are connected to each other according to anilist.',
        errorTolerance: {
            correct: 'The exact number of connected anime pieces.',
            almost: 'The number of connected anime pieces within a tolerance limit of 1 piece.',
        },
    },
    [Animedle.HintType.Format]: {
        title: 'Format',
        description: 'Anime format. It can take the following values: "TV", "MOVIE", "OVA", "SPECIAL".',
        errorTolerance: {
            correct: 'Exact value of anime format.',
            almost: 'No error tolerance.',
        },
    },
    [Animedle.HintType.Genre]: {
        title: 'Genre',
        description: 'The anime genre, for example: Romance, Drama, etc.',
        errorTolerance: {
            correct: 'Exact value of anime genre.',
            almost: 'No error tolerance.',
        },
    },
    [Animedle.HintType.Popularity]: {
        title: 'Popularity',
        description: 'Popularity of anime according to anilist.',
        errorTolerance: {
            correct: 'A value that is within the error tolerance of 10%.',
            almost: 'A value that is within the error tolerance of 20%.',
        },
    },
    [Animedle.HintType.Season]: {
        title: 'Season',
        description: 'Season. It can take the following values: "SPRING", "SUMMER", "AUTUMN", "WINTER".',
        errorTolerance: {
            correct: 'Exact value of season.',
            almost: 'No error tolerance.',
        },
    },
    [Animedle.HintType.Studio]: {
        title: 'Studio',
        description: 'The main studio making the anime.',
        errorTolerance: {
            correct: 'Exact value of studio name.',
            almost: 'No error tolerance.',
        },
    },
    [Animedle.HintType.Year]: {
        title: 'Year of Production',
        description: 'The year the anime began airing.',
        errorTolerance: {
            correct: 'The exact value of the year of production.',
            almost: 'Value that is within the error tolerance of 2 years.',
        },
    },
};

export const AnswearInfoPopup = ({ item }: Props) => {
    const { hintType } = item;

    return (
        <Popup>
            <Popup.Header title={hintType} />
            <Popup.Body style={animedleStyles.answearPopupBody}>
                <View style={animedleStyles.answearPopupDescription}>
                    <Title title="Description" />
                    <Text style={animedleStyles.answearPopupDescriptionValue}>{ANSWEARS_INFO[hintType].description}</Text>
                </View>
                <View style={animedleStyles.answearPopupFault}>
                    <Title title="Fault tolerance" />
                    <Text style={animedleStyles.answearPopupFaultValue}>Correct answear: {ANSWEARS_INFO[hintType].errorTolerance.correct}</Text>
                    <Text style={animedleStyles.answearPopupFaultValue}>Almost correct answear: {ANSWEARS_INFO[hintType].errorTolerance.almost}</Text>
                </View>
            </Popup.Body>
            <Popup.Footer />
        </Popup>
    );
};