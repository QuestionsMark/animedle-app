import { View } from "react-native";
import { Button } from "../../components/common/Button";
import { FormikProps } from "formik";
import { SECONDARY_COLOR, animedleStyles } from "../../styles";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { AutocompleteInput } from "../../components/common/AutocompleteTextInput";
import { useSearch } from "../../hooks/useSearch";

interface Props {
    formikProps: FormikProps<{
        title: string;
    }>;
}

export const GuesFormContent = ({ formikProps }: Props) => {
    const { isFinished } = useAnimedleInfo();

    const { data, handleSearchPhraseChange, reset } = useSearch<string>('animedle/suggestions', 5);

    const handleTextChange = (value: string) => {
        handleSearchPhraseChange(value);
        formikProps.handleChange('title')(value);
    };

    const handleSuggestionPress = (suggestion: string) => {
        formikProps.handleChange('title')(suggestion);
        reset();
    }

    return (
        <View style={animedleStyles.guesFormContent}>
            <AutocompleteInput
                value={formikProps.values.title}
                onChangeText={handleTextChange}
                onSuggestionPress={handleSuggestionPress}
                placeholder="Gues anime"
                editable={!isFinished}
                style={animedleStyles.guesFormAutocompletion}
                textInputStyle={animedleStyles.guesFormAutocompletionInput}
                suggestions={data}
            />
            <Button
                onPress={() => formikProps.handleSubmit()}
                buttonColor={SECONDARY_COLOR}
                style={animedleStyles.guesFormSubmit}
                disabled={isFinished}
            >
                Send
            </Button>
        </View>
    );
};