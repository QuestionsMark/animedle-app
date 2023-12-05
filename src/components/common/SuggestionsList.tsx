import { View } from "react-native";
import { Suggestion } from "./Suggestion";
import { componentsStyles } from "../../styles";

interface Props {
    suggestions: string[];
    onSuggestionPress(suggestion: string): void;
}

export const SuggestionsList = ({ onSuggestionPress, suggestions }: Props) => {
    const suggestionsList = () => {
        return suggestions.map(s => (
            <Suggestion
                key={s}
                suggestion={s}
                onSuggestionPress={onSuggestionPress}
            />
        ));
    };

    return (
        <View style={componentsStyles.autocompletionList}>
            {suggestionsList()}
        </View>
    );
};