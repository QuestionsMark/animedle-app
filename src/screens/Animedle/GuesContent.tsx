import { View } from "react-native";
import { animedleStyles } from "../../styles";
import { Title } from "../../components/common/Title";
import { useUserInfo } from "../../contexts/user.context";
import { useState } from "react";

export const GuesContent = () => {
    const { } = useUserInfo();

    const [index, setIndex] = useState(0);

    return (
        <View style={animedleStyles.guesContent}>
            <Title title={`${index + 1} Gues`} />
        </View>
    );
};