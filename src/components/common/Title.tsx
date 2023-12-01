import { Text } from "react-native";
import { componentsStyles } from "../../styles";

interface Props {
    title: string;
}

export const Title = ({ title }: Props) => {
    return (
        <Text style={componentsStyles.title}>{title}</Text>
    );
};