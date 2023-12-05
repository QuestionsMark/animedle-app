import { View } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "../../components/common/TextInput";
import { FormikProps } from "formik";
import { PasswordInput } from "../../components/common/PasswordInput";
import { PRIMARY_COLOR, loginStyles } from "../../styles";
import { Title } from "../../components/common/Title";
import { Logo } from "../../components/common/Logo";

interface Props {
    formikProps: FormikProps<{
        email: string;
        password: string;
    }>;
}

export const LoginFormContent = ({ formikProps }: Props) => {
    return (
        <View style={loginStyles.form}>
            <Title title="Login" />
            <Logo />
            <View style={loginStyles.formContent}>
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
                <Button
                    onPress={() => formikProps.handleSubmit()}
                    mode="contained"
                    buttonColor={PRIMARY_COLOR}
                    style={loginStyles.submit}
                >
                    Start
                </Button>
            </View>
        </View>
    );
};