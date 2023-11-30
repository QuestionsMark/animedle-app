import { Formik } from "formik";
import { LoginState } from "../../validation/login.validation";
import { usePromises } from "../../contexts/promises.context";
import { useUser } from "../../contexts/user.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Auth } from "../../types";

import * as SecureStore from 'expo-secure-store';
import { LoginFormContent } from "./LoginFormContent";
import { globalStyles } from "../../styles";

export const defaultLoginState: LoginState = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    const { setError, setLoading } = usePromises();
    const { setUser } = useUser();

    const handleSubmit = async (values: LoginState) => {
        setLoading(true);
        const { delayTime, response } = await minimalDelayFunction<Auth.Response>(() => fetchTool('auth/login', 'POST', values));

        setTimeout(() => {
            setLoading(false);
            setTimeout(async () => {
                if (!response.status) return setError({ text1: 'Authorization Error!', text2: response.message });
                await SecureStore.setItemAsync(Auth.SecureStoreKey.Auth, response.results.token);
                setUser(response.results.user);
            });
        }, delayTime);
    };

    return (
        <Formik
            initialValues={defaultLoginState}
            onSubmit={handleSubmit}
            style={globalStyles.card}
        >
            {(props) => <LoginFormContent formikProps={props} />}
        </Formik>
    );
};