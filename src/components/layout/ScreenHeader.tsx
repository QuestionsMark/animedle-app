import { Text, View } from "react-native";
import { componentsStyles } from "../../styles";

interface Props {
    title: string;
}

export const ScreenHeader = ({ title }: Props) => {
    return (
        <View style={componentsStyles.screenHeader}>
            <View style={componentsStyles.screenHeaderContent}>
                <View style={componentsStyles.screenHeaderLineLeft} />
                <Text style={componentsStyles.screenHeaderTitle}>
                    {title}
                </Text>
                <View style={componentsStyles.screenHeaderLineRight} />
            </View>
        </View>
    );
};