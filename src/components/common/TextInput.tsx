import { TextInput as TextInp, TextInputProps } from 'react-native';
import { formStyles } from '../../styles';

export const TextInput = ({ placeholderTextColor, ...rest }: TextInputProps) => {
    return (
        <TextInp
            style={formStyles.input}
            placeholderTextColor={placeholderTextColor || '#796E92'}
            {...rest}
        />
    );
};