import { SECONDARY_COLOR, profileStyles } from "../../styles";
import { Profile } from "../../types";
import { Button } from "../common/Button";
import { Popup } from "../common/Popup";
import { FlatList } from "react-native";
import { SkinItem } from "../../screens/Profile/SkinItem";
import { useState } from "react";
import { usePromises } from "../../contexts/promises.context";
import { fetchTool, lastDataElementRef, minimalDelayFunction } from "../../utils/api.util";
import { useSearch } from "../../hooks/useSearch";
import { useProfile, useProfileInfo } from "../../contexts/profile.context";

const limit = 24;

export const ChangeSkinPopup = () => {
    const { setProfile } = useProfile();
    const { avatar } = useProfileInfo();
    const { endLoading, setToast, startLoading } = usePromises();

    const { amount, data, hasMore, loading, page, setPage } = useSearch<string>('user/skins', 24, true);

    const [choosedSkin, setChoosedSkin] = useState(avatar);
    const handleSkinChoose = (skin: string) => {
        setChoosedSkin(skin);
    }

    const handleSubmit = async (close: () => void) => {
        startLoading();
        const { delayTime, response } = await minimalDelayFunction<Profile.ContextValue>(() => fetchTool(`user/avatar/${choosedSkin}`, 'PATCH'));
        setTimeout(() => {
            endLoading();
            if (!response.status) return setToast({ type: 'error', text1: 'Fetch failed!', text2: response.message });
            setProfile(response.results);
            close();
        }, delayTime);
    };

    return (
        <Popup>
            {(close) => (<>
                <Popup.Header title="Choose Your Skin" />
                <Popup.Body>
                    <FlatList
                        data={data}
                        renderItem={({ index, item }) => (
                            <SkinItem
                                handleSkinChoose={handleSkinChoose}
                                isActive={item === choosedSkin}
                                item={item}
                                last={index === data.length - 1}
                            />
                        )}
                        keyExtractor={(skin) => skin}
                        onEndReachedThreshold={0.2}
                        onEndReached={() => lastDataElementRef(amount, hasMore, limit, loading, page, setPage)}
                        numColumns={2}
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