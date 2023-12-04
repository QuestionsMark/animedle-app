import { TextInput as TextInp, TextInputProps } from 'react-native';
import { formStyles } from '../../styles';

export const TextInput = ({ placeholderTextColor, style, ...rest }: TextInputProps) => {
    return (
        <TextInp
            style={style ? [formStyles.input, style] : formStyles.input}
            placeholderTextColor={placeholderTextColor || '#796E92'}
            {...rest}
        />
    );
};