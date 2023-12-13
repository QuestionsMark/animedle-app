import { useState } from "react";
import { Keyboard, NativeSyntheticEvent, TextInputFocusEventData, TextStyle, View, ViewStyle } from "react-native";
import { TextInputProps } from "react-native-paper";
import { SuggestionsList } from "./SuggestionsList";
import { TextInput } from "./TextInput";
import { componentsStyles } from "../../styles";

interface Props extends TextInputProps {
    suggestions: string[];
    onSuggestionPress?(suggestion: string): void;
    style?: ViewStyle;
    textInputStyle?: TextStyle;
}

export const AutocompleteInput = ({ suggestions, onSuggestionPress, onBlur, onFocus, style, textInputStyle, ...rest }: Props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        if (typeof onFocus === 'function') {
            onFocus(e);
        }
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        if (typeof onBlur === 'function') {
            onBlur(e);
        }
    };

    const handleSuggestionPress = (suggestion: string) => {
        if (typeof onSuggestionPress === 'function') {
            onSuggestionPress(suggestion);
            setIsFocused(false);
            Keyboard.dismiss();
        }
    };

    return (
        <View style={style ? [componentsStyles.autocomplete, style] : componentsStyles.autocomplete}>
            <TextInput
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={textInputStyle}
                {...rest}
            />
            {isFocused && suggestions.length !== 0 && <SuggestionsList
                suggestions={suggestions}
                onSuggestionPress={handleSuggestionPress}
            />}
        </View>
    );
};