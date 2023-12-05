import { Formik } from "formik";
import { LoginState } from "../../validation/login.validation";
import { usePromises } from "../../contexts/promises.context";
import { useUser } from "../../contexts/user.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Auth } from "../../types";

import * as SecureStore from 'expo-secure-store';
import { LoginFormContent } from "./LoginFormContent";
import { componentsStyles } from "../../styles";
import { Keyboard } from "react-native";

export const defaultLoginState: LoginState = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    const { endLoading, startLoading, setToast } = usePromises();
    const { setUser } = useUser();

    const handleSubmit = async (values: LoginState) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Auth.Response>(() => fetchTool('auth/login', 'POST', values));
        setTimeout(async () => {
            Keyboard.dismiss();
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Authorization Error!', text2: response.message });
            await SecureStore.setItemAsync(Auth.SecureStoreKey.Auth, response.results.token);
            setUser(response.results.user);
        }, delayTime);
    };

    return (
        <Formik
            initialValues={defaultLoginState}
            onSubmit={handleSubmit}
            style={componentsStyles.card}
        >
            {(props) => <LoginFormContent formikProps={props} />}
        </Formik>
    );
};