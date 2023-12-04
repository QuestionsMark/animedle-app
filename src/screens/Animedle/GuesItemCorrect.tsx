import { FontAwesome } from "@expo/vector-icons";
import { SECONDARY_COLOR, animedleStyles } from "../../styles";

export const GuesItemCorrect = () => {
    return (<>
        <FontAwesome name="star" size={32} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar1]} />
        <FontAwesome name="star" size={24} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar2]} />
        <FontAwesome name="star" size={18} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar3]} />
        {/* <FontAwesome name="star" size={12} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar4]} /> */}
        <FontAwesome name="star" size={32} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar5]} />
        <FontAwesome name="star" size={24} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar6]} />
        <FontAwesome name="star" size={18} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar7]} />
        {/* <FontAwesome name="star" size={12} color={SECONDARY_COLOR} style={[animedleStyles.guesContentItemStar, animedleStyles.guesContentItemStar8]} /> */}
    </>);
};