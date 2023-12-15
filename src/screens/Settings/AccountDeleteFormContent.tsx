import { View } from "react-native";
import { PRIMARY_COLOR, settingsStyles } from "../../styles";
import { FormikProps } from "formik";
import { PasswordInput } from "../../components/common/PasswordInput";
import { Button } from "../../components/common/Button";

interface Props {
    formikProps: FormikProps<{
        password: string;
    }>;
}

export const AccountDeleteFormContent = ({ formikProps }: Props) => {
    return (
        <View style={settingsStyles.accountDeleteForm}>
            <PasswordInput
                onChangeText={formikProps.handleChange('password')}
                placeholder="Password"
                value={formikProps.values.password}
                style={settingsStyles.accountDeleteFormInput}
            />
            <Button
                onPress={() => formikProps.handleSubmit()}
                buttonColor={PRIMARY_COLOR}
                style={settingsStyles.accountDeleteFormSubmit}
            >
                Delete Account
            </Button>
        </View>
    );
};