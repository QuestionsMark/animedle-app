import { Formik } from "formik";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { RegisterState } from "../../validation/register.validation";
import { componentsStyles } from "../../styles";
import { RegisterFormContent } from "./RegisterFormContent";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabList } from "../../components/layout/ScreenManager";
import { Keyboard } from "react-native";

export const defaultLoginState: RegisterState = {
    confirmPassword: '',
    email: '',
    password: '',
    username: '',
};

export const RegisterForm = () => {
    const { endLoading, startLoading, setToast } = usePromises();
    const navigation = useNavigation<NavigationProp<TabList>>();

    const handleSubmit = async (state: RegisterState) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<string>(() => fetchTool('user', 'POST', {
            confirmPassword: state.confirmPassword.trim(),
            email: state.email.trim(),
            password: state.password.trim(),
            username: state.username.trim(),
        }));
        setTimeout(() => {
            Keyboard.dismiss();
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Authorization Error!', text2: response.message });
            setToast({ type: 'success', text1: response.results });
            navigation.navigate('Login');
        }, delayTime);
    };

    return (
        <Formik
            initialValues={defaultLoginState}
            onSubmit={handleSubmit}
            style={componentsStyles.card}
        >
            {(props) => <RegisterFormContent formikProps={props} />}
        </Formik>
    );
};