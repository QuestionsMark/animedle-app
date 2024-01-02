import { Keyboard, View } from "react-native";
import { animedleStyles } from "../../styles";
import { Formik, FormikHelpers } from "formik";
import { GuesState } from "../../validation/gues.validation";
import { GuesFormContent } from "./GuesFormContent";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Animedle } from "../../types";
import { useAnimedle } from "../../contexts/animedle.context";
import { useSearch } from "../../hooks/useSearch";
import { useUserInfo } from "../../contexts/user.context";
import { usePopup } from "../../contexts/popup.context";
import { ReviewRequestPopup } from "../../components/popups/ReviewRequestPopup";
import { useEffect } from "react";

const defaultGuesState: GuesState = {
    title: '',
};

export const GuesForm = () => {
    const { endLoading, setToast, startLoading } = usePromises();
    const { review } = useUserInfo();
    const { setAnimedle } = useAnimedle();
    const { open } = usePopup();

    const { data, handleSearchPhraseChange, reset } = useSearch<string>('animedle/suggestions', 5);

    const handleSubmit = async (values: GuesState, { resetForm }: FormikHelpers<{ title: string; }>) => {
        if (!values.title) return;
        reset();
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Animedle.ContextValue>(() => fetchTool('user/gues', 'POST', values));
        setTimeout(async () => {
            endLoading();
            Keyboard.dismiss();
            resetForm();
            if (!response.status) {
                setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                startLoading();
                const { delayTime, response: response2 } = await minimalDelayFunction<Animedle.ContextValue>(() => fetchTool('animedle'));
                setTimeout(() => {
                    endLoading();
                    if (!response2.status) {
                        setAnimedle(null);
                        setToast({ type: 'error', text1: 'Fetch Failed!', text2: response2.message });
                        return;
                    };
                    setAnimedle(response2.results);
                }, delayTime);
                return;
            };
            if (review === null && response.results.gueses[response.results.gueses.length - 1].isCorrect) {
                open(<ReviewRequestPopup />);
            }
            setAnimedle(response.results);
        }, delayTime);
    };

    useEffect(() => {
        open(<ReviewRequestPopup />);
    }, []);

    return (
        <View style={animedleStyles.guesForm}>
            <Formik
                initialValues={defaultGuesState}
                onSubmit={handleSubmit}
                onReset={({ }) => { }}
            >
                {(props) => (
                    <GuesFormContent
                        formikProps={props}
                        suggestions={data}
                        handleSearchPhraseChange={handleSearchPhraseChange}
                        resetSuggestions={reset}
                    />
                )}
            </Formik>
        </View>
    );
};