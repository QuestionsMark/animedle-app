import { Text, View } from "react-native";
import { User } from "../../types";
import { Title } from "../../components/common/Title";
import { URLImage } from "../../components/common/URLImage";
import { rankingStyles } from "../../styles";

interface Props {
    index: number;
    item: User.RankingItem;
}

export const RankingItem = ({ index, item }: Props) => {
    const { avatar, bestWinStreak, points, username } = item;

    return (
        <View style={rankingStyles.item}>
            <Title title={String(index + 1)} />
            <View style={rankingStyles.itemInfo}>
                <URLImage id={avatar} style={rankingStyles.itemImg} />
                <Text style={rankingStyles.itemUsername}>
                    {username}
                </Text>
                <View style={rankingStyles.itemStats}>
                    <View style={rankingStyles.itemStat}>
                        <Text style={rankingStyles.itemStatTitle}>Points</Text>
                        <Text style={rankingStyles.itemStatValue}>{points}</Text>
                    </View>
                    <View style={rankingStyles.itemStat}>
                        <Text style={rankingStyles.itemStatTitle}>BWS</Text>
                        <Text style={rankingStyles.itemStatValue}>{bestWinStreak}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};