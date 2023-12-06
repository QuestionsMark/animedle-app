import { View } from "react-native";
import { Button } from "../../components/common/Button";
import { FormikProps } from "formik";
import { SECONDARY_COLOR, animedleStyles } from "../../styles";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { AutocompleteInput } from "../../components/common/AutocompleteTextInput";

interface Props {
    formikProps: FormikProps<{
        title: string;
    }>;
    suggestions: string[];
    handleSearchPhraseChange(value: string): void;
    resetSuggestions(): void;
}

export const GuesFormContent = ({ formikProps, handleSearchPhraseChange, resetSuggestions, suggestions }: Props) => {
    const { isFinished } = useAnimedleInfo();

    const handleTextChange = (value: string) => {
        handleSearchPhraseChange(value);
        formikProps.handleChange('title')(value);
    };

    const handleSuggestionPress = (suggestion: string) => {
        formikProps.handleChange('title')(suggestion);
        resetSuggestions();
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
                suggestions={suggestions}
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