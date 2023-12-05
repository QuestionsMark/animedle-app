import { SECONDARY_COLOR, profileStyles } from "../../styles";
import { Profile } from "../../types";
import { Button } from "../common/Button";
import { Popup } from "../common/Popup";
import { FlatList } from "react-native";
import { SkinItem } from "../../screens/Profile/SkinItem";
import { Dispatch, SetStateAction, useState } from "react";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, minimalDelayFunction } from "../../utils/api.util";

interface Props {
    profileContext: Profile.ContextValue;
    setProfileContext: Dispatch<SetStateAction<Profile.ContextValue | null>>;
}

export const ChangeSkinPopup = ({ profileContext, setProfileContext }: Props) => {
    const { avatar, skins } = profileContext;
    const { endLoading, setError, startLoading } = usePromises();

    const [choosedSkin, setChoosedSkin] = useState(avatar);
    const handleSkinChoose = (skin: string) => {
        setChoosedSkin(skin);
    }

    const handleSubmit = async (close: () => void) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Profile.ContextValue>(() => fetchTool(`user/avatar/${choosedSkin}`, 'PATCH'));

        setTimeout(async () => {
            endLoading();
            if (!response.status) return setError({ text1: 'Fetch failed!', text2: response.message });
            setProfileContext(response.results);
            close();
        }, delayTime);
    };

    return (
        <Popup>
            {(close) => (<>
                <Popup.Header title="Choose Your Skin" />
                <Popup.Body style={profileStyles.changeSkin}>
                    <FlatList
                        data={skins}
                        renderItem={({ index, item }) => (
                            <SkinItem
                                handleSkinChoose={handleSkinChoose}
                                isActive={item === choosedSkin}
                                item={item}
                                last={index === skins.length - 1}
                            />
                        )}
                        keyExtractor={(skin) => skin}
                    />
                </Popup.Body>
                <Popup.Footer>
                    <Button
                        onPress={() => handleSubmit(close)}
                        style={profileStyles.changeSkinSubmit}
                        buttonColor={SECONDARY_COLOR}
                        disabled={avatar === choosedSkin}
                    >
                        Change skin
                    </Button>
                </Popup.Footer>
            </>)}
        </Popup>
    );
};