import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { loginStyles } from "../../styles";
import { LoginForm } from "./LoginForm";

export const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={loginStyles.container}>
                <LoginForm />
            </View>
        </TouchableWithoutFeedback>
    );
};