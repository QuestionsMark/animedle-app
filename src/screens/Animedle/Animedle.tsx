import { RefreshControl, ScrollView, View } from "react-native";
import { animedleStyles } from "../../styles";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { GuesForm } from "./GuesForm";
import { FreeHint } from "./FreeHint";
import { GuesContent } from "./GuesContent";
import { useAnimedle, useAnimedleInfo } from "../../contexts/animedle.context";
import { useState } from "react";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";
import { Animedle as AnimedleNamesapce } from "../../types";
import { usePromises } from "../../contexts/promises.context";

export const Animedle = () => {
    const { setToast } = usePromises();
    const { setAnimedle } = useAnimedle();
    const { gueses } = useAnimedleInfo();

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        const { delayTime, response } = await minimalDelayFunction<AnimedleNamesapce.ContextValue>(() => fetchTool('animedle'));
        setTimeout(() => {
            setRefreshing(false);
            if (!response.status) {
                setAnimedle(null);
                setToast({ type: 'error', text1: 'Fetch Failed!', text2: response.message });
                return;
            };
            setAnimedle(response.results);
        }, delayTime);
    };

    return (
        <View style={animedleStyles.container}>
            <ScreenHeader title="Animedle" />
            <View style={animedleStyles.content}>
                <ScrollView
                    style={animedleStyles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    contentContainerStyle={animedleStyles.scrollContent}
                >
                    <GuesForm />
                    <FreeHint />
                    {gueses.length !== 0 && <GuesContent />}
                </ScrollView>
            </View>
        </View>
    );
};