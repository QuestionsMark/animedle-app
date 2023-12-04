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
    const { setError, setLoading } = usePromises();
    const { setAnimedle } = useAnimedle();

    const handleSubmit = async (values: GuesState, { resetForm }: FormikHelpers<{ title: string; }>) => {
        if (!values.title) return;

        setLoading(true);
        const { delayTime, response } = await minimalDelayFunction<Animedle.ContextValue>(() => fetchTool('user/gues', 'POST', values));

        setTimeout(() => {
            setLoading(false);
            setTimeout(async () => {
                if (!response.status) return setError({ text1: 'Fetch Failed!', text2: response.message });
                setAnimedle(response.results);
                resetForm();
                Keyboard.dismiss();
            });
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