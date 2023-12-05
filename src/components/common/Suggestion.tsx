import { Pressable, Text, View } from "react-native";
import { componentsStyles } from "../../styles";

interface Props {
    suggestion: string;
    onSuggestionPress(suggestion: string): void;
}

export const Suggestion = ({ onSuggestionPress, suggestion }: Props) => {
    return (
        <Pressable onPress={() => onSuggestionPress(suggestion)}>
            <View style={componentsStyles.autocompletionItem}>
                <Text style={componentsStyles.autocompletionItemValue}>
                    {suggestion}
                </Text>
            </View>
        </Pressable>
    );
};