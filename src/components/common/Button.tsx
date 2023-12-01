import { ReactNode } from "react";
import { Pressable } from "react-native";

interface Props {
    onPress(): void;
    children: ReactNode;
    style?: any;
}

export const Button = ({ children, onPress, style }: Props) => {
    return (
        <Pressable style={style} onPress={onPress}>
            {children}
        </Pressable>
    );
};