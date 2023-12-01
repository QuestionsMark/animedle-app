import { Text } from "react-native";
import { Button } from "../../components/common/Button";
import { Animedle } from "../../types";
import { animedleStyles } from "../../styles";
import { fetchTool } from "../../utils/api.util";
import { usePromises } from "../../contexts/promises.context";
import { useAnimedle } from "../../contexts/animedle.context";

interface Props {
    item: Animedle.HintType;
}

export const HintItem = ({ item }: Props) => {
    const { setError } = usePromises();
    const { setAnimedle } = useAnimedle();

    const handlePress = async () => {
        const response = await fetchTool<Animedle.ContextValue>(`user/hint`, 'PATCH', { hint: item });
        if (!response.status) return setError({ text1: 'Authorization Error', text2: 'Session has expired.' });
        setAnimedle(response.results);
    };

    return (
        <Button onPress={handlePress}>
            <Text style={animedleStyles.freeHintItem}>{item}</Text>
        </Button>
    );
};