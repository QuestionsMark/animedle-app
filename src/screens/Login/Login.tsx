import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { loginStyles } from "../../styles";
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";
import { useUser } from "../../contexts/user.context";

export const Login = () => {
    const { setIsWelcomePopupVisible } = useUser();

    useEffect(() => {
        setIsWelcomePopupVisible(true);
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={loginStyles.container}>
                <LoginForm />
            </View>
        </TouchableWithoutFeedback>
    );
};