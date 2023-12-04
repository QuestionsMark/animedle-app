import { Text, View } from "react-native";
import { componentsStyles, profileStyles } from "../../styles";
import { Title } from "../../components/common/Title";
import { useProfileInfo } from "../../contexts/profile.context";

export const Stats = () => {
    const { skins, streak, winStreak } = useProfileInfo();

    return (
        <View style={[componentsStyles.card, profileStyles.stats]}>
            <Title title="Statistics" />
            <View style={profileStyles.statsList}>
                <View style={profileStyles.statsItem}>
                    <Text style={profileStyles.statsItemTitle}>
                        Daily streak:
                    </Text>
                    <Text style={profileStyles.statsItemValue}>
                        {streak}
                    </Text>
                </View>
                <View style={profileStyles.statsItem}>
                    <Text style={profileStyles.statsItemTitle}>
                        Win streak:
                    </Text>
                    <Text style={profileStyles.statsItemValue}>
                        {winStreak}
                    </Text>
                </View>
                <View style={profileStyles.statsItem}>
                    <Text style={profileStyles.statsItemTitle}>
                        Skins:
                    </Text>
                    <Text style={profileStyles.statsItemValue}>
                        {skins.length}
                    </Text>
                </View>
            </View>
        </View>
    );
};