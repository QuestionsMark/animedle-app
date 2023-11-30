import { Text, View } from "react-native";
import { PRIMARY_COLOR, loginStyles } from "../../styles";
import { FormikProps } from "formik";
import { TextInput } from "../../components/common/TextInput";
import { PasswordInput } from "../../components/common/PasswordInput";
import { Button } from "react-native-paper";

interface Props {
    formikProps: FormikProps<{
        confirmPassword: string;
        email: string;
        password: string;
        username: string;
    }>;
}

export const RegisterFormContent = ({ formikProps }: Props) => {
    return (
        <View style={loginStyles.form}>
            <Text style={loginStyles.title}>Create Account</Text>
            <View style={loginStyles.formContent}>
                <TextInput
                    onChangeText={formikProps.handleChange('username')}
                    placeholder="Username"
                    value={formikProps.values.username}
                />
                <TextInput
                    onChangeText={formikProps.handleChange('email')}
                    placeholder="Email"
                    value={formikProps.values.email}
                />
                <PasswordInput
                    onChangeText={formikProps.handleChange('password')}
                    placeholder="Password"
                    value={formikProps.values.password}
                />
                <PasswordInput
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    placeholder="Confirm password"
                    value={formikProps.values.confirmPassword}
                />
                <Button
                    onPress={() => formikProps.handleSubmit()}
                    mode="contained"
                    buttonColor={PRIMARY_COLOR}
                    style={loginStyles.submit}
                >
                    Register
                </Button>
            </View>
        </View>
    );
};