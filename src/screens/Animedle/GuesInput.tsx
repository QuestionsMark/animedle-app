import { View } from "react-native";
import { animedleStyles } from "../../styles";
import { TextInput } from "../../components/common/TextInput";
import { useState } from "react";

export const GuesInput = () => {
    const [gues, setGues] = useState('');

    return (
        <View style={animedleStyles.guesInput}>
            <TextInput
                value={gues}
                onChangeText={(text) => setGues(text)}
                placeholder="Gues anime"
            />
        </View>
    );
};