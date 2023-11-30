import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { loginStyles } from "../../styles";
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={loginStyles.container}>
                <RegisterForm />
            </View>
        </TouchableWithoutFeedback>
    );
};