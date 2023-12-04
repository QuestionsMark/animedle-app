import { View } from "react-native";
import { ScreenHeader } from "../../components/layout/ScreenHeader";
import { profileStyles } from "../../styles";
import { useProfileInfo } from "../../contexts/profile.context";
import { Avatar } from "./Avatar";
import { Stats } from "./Stats";

export const Profile = () => {
    // const { setError, setLoading } = usePromises();
    const { username } = useProfileInfo();

    // const handleGenerate = async () => {
    //     setLoading(true);
    //     const { delayTime, response } = await minimalDelayFunction<any>(() => fetchTool('profile/generate'));

    //     setTimeout(() => {
    //         setLoading(false);
    //         setTimeout(async () => {
    //             if (!response.status) return setError({ text1: 'Authorization Error!', text2: response.message });
    //             console.log('Wygenerowane');
    //         });
    //     }, delayTime);
    // };

    return (
        <View style={profileStyles.container}>
            <ScreenHeader title={username} />
            <View style={profileStyles.content}>
                <Avatar />
                <Stats />
            </View>
        </View>
    );
};