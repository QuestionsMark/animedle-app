import { View } from "react-native";
import { TextInput } from "../../components/common/TextInput";
import { Button } from "../../components/common/Button";
import { FormikProps } from "formik";
import { SECONDARY_COLOR, animedleStyles } from "../../styles";
import { useAnimedleInfo } from "../../contexts/animedle.context";

interface Props {
    formikProps: FormikProps<{
        title: string;
    }>;
}

export const GuesFormContent = ({ formikProps }: Props) => {
    const { isFinished } = useAnimedleInfo();

    return (
        <View style={animedleStyles.guesFormContent}>
            <TextInput
                value={formikProps.values.title}
                onChangeText={formikProps.handleChange('title')}
                placeholder="Gues anime"
                editable={!isFinished}
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