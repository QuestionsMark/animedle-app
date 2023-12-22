import { Text, View } from "react-native";
import { Title } from "../../components/common/Title";
import { URLImage } from "../../components/common/URLImage";
import { rankingStyles } from "../../styles";
import { AdBanner } from "../../components/common/AdBanner";
import { User } from "../../types";

interface Props {
    item: User.RankingItem;
}

export const RankingItem = ({ item }: Props) => {
    const { avatar, bestWinStreak, points, username, ad, top } = item;

    return ad ? <AdBanner /> : (
        <View style={rankingStyles.item}>
            <Title title={String(top || '-')} />
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