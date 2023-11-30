import { Formik } from "formik";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { RegisterState } from "../../validation/register.validation";
import { globalStyles } from "../../styles";
import { RegisterFormContent } from "./RegisterFormContent";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabList } from "../../components/layout/ScreenManager";

export const defaultLoginState: RegisterState = {
    confirmPassword: '',
    email: '',
    password: '',
    username: '',
};

export const RegisterForm = () => {
    const { setError, setLoading, setMessage } = usePromises();
    const navigation = useNavigation<NavigationProp<TabList>>();

    const handleSubmit = async (state: RegisterState) => {
        setLoading(true);
        const { delayTime, response } = await minimalDelayFunction<string>(() => fetchTool('user', 'POST', state));

        setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
                if (!response.status) return setError({ text1: 'Authorization Error!', text2: response.message });
                setMessage({ text1: response.results });
                navigation.navigate('Login');
            });
        }, delayTime);
    };

    return (
        <Formik
            initialValues={defaultLoginState}
            onSubmit={handleSubmit}
            style={globalStyles.card}
        >
            {(props) => <RegisterFormContent formikProps={props} />}
        </Formik>
    );
};