import { Text, View } from "react-native";
import { PRIMARY_COLOR, loginStyles } from "../../styles";
import { FormikProps } from "formik";
import { TextInput } from "../../components/common/TextInput";
import { PasswordInput } from "../../components/common/PasswordInput";
import { Button } from "react-native-paper";
import { Title } from "../../components/common/Title";

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
            <Title title="Create Account" />
            <View style={loginStyles.formContent}>
                <TextInput
                    onChangeText={formikProps.handleChange('username')}
                    placeholder="Username"
                    value={formikProps.values.username}
                    style={loginStyles.input}
                />
                <TextInput
                    onChangeText={formikProps.handleChange('email')}
                    placeholder="Email"
                    value={formikProps.values.email}
                    style={loginStyles.input}
                />
                <PasswordInput
                    onChangeText={formikProps.handleChange('password')}
                    placeholder="Password"
                    value={formikProps.values.password}
                    style={loginStyles.input}
                />
                <PasswordInput
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    placeholder="Confirm password"
                    value={formikProps.values.confirmPassword}
                    style={loginStyles.input}
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