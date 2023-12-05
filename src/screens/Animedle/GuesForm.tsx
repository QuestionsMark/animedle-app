import { Keyboard, View } from "react-native";
import { animedleStyles } from "../../styles";
import { Formik, FormikHelpers } from "formik";
import { GuesState } from "../../validation/gues.validation";
import { GuesFormContent } from "./GuesFormContent";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Animedle } from "../../types";
import { useAnimedle } from "../../contexts/animedle.context";

const defaultGuesState: GuesState = {
    title: '',
};

export const GuesForm = () => {
    const { endLoading, setToast, startLoading } = usePromises();
    const { setAnimedle } = useAnimedle();

    const handleSubmit = async (values: GuesState, { resetForm }: FormikHelpers<{ title: string; }>) => {
        if (!values.title) return;

        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Animedle.ContextValue>(() => fetchTool('user/gues', 'POST', values));
        setTimeout(async () => {
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
            setAnimedle(response.results);
            resetForm();
            Keyboard.dismiss();
        }, delayTime);
    };

    return (
        <View style={animedleStyles.guesForm}>
            <Formik
                initialValues={defaultGuesState}
                onSubmit={handleSubmit}
                onReset={({ }) => { }}
            >
                {(props) => <GuesFormContent formikProps={props} />}
            </Formik>
        </View>
    );
};