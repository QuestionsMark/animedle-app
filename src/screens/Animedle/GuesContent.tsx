import { FlatList, View } from "react-native";
import { animedleStyles } from "../../styles";
import { Title } from "../../components/common/Title";
import { useEffect, useRef } from "react";
import { useAnimedleInfo } from "../../contexts/animedle.context";
import { GuesItem } from "./GuesItem";
import { Gues } from "../../types";

export const GuesContent = () => {
    const { gueses } = useAnimedleInfo();

    const listRef = useRef<FlatList<Gues.Response> | null>();

    useEffect(() => {
        listRef.current?.scrollToEnd({ animated: true });
    }, [gueses]);

    return (
        <View style={animedleStyles.guesContent}>
            <Title title={`Guesses ${gueses.length}/10`} />
            <FlatList
                ref={ref => listRef.current = ref}
                data={gueses}
                renderItem={({ index, item }) => <GuesItem item={item} last={index === gueses.length - 1} />}
                keyExtractor={({ animeId }) => String(animeId)}
                horizontal
                style={animedleStyles.guesContentList}
            />
        </View>
    );
};