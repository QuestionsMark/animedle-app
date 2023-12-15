import { Formik, FormikHelpers } from "formik";
import { AccountDeleteState } from "../../validation/account-delete.validation";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Keyboard } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Auth } from "../../types";
import { useUser } from "../../contexts/user.context";
import { AccountDeleteFormContent } from "./AccountDeleteFormContent";

const defaultAccountDeleteState: AccountDeleteState = {
    password: '',
};

export const AccountDeleteForm = () => {
    const { endLoading, setToast, startLoading } = usePromises();
    const { setUser } = useUser();

    const handleSubmit = async (values: AccountDeleteState, { resetForm }: FormikHelpers<{ password: string; }>) => {
        resetForm();
        if (!values.password) return;
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<string>(() => fetchTool('user', 'DELETE', values));
        setTimeout(async () => {
            Keyboard.dismiss();
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Fetch failed!', text2: response.message });
            setToast({ type: 'success', text1: 'Success!', text2: response.results });
            await SecureStore.deleteItemAsync(Auth.SecureStoreKey.Auth);
            setUser(null);
        }, delayTime);
    };

    return (
        <Formik
            initialValues={defaultAccountDeleteState}
            onSubmit={handleSubmit}
        >
            {(props) => <AccountDeleteFormContent formikProps={props} />}
        </Formik>
    );
};