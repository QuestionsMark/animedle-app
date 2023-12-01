import { Loader } from "../../components/common/Loader";
import { AnimedleProvider, useAnimedle } from "../../contexts/animedle.context";
import { Animedle } from "./Animedle";

export const AnimedleScreen = () => {
    return (
        <AnimedleProvider>
            <AnimedleScreen.Guard />
        </AnimedleProvider>
    );
};

AnimedleScreen.Guard = () => {
    const { animedle } = useAnimedle();

    // Add error handling TODO

    return (<>{animedle ? <Animedle /> : <Loader />}</>);
};