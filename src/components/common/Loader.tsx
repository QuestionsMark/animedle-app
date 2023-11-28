import { ActivityIndicator, View } from 'react-native';
import { componentsStyles } from '../../styles';

export const Loader = () => {
    return (
        <View style={componentsStyles.loader}>
            <ActivityIndicator />
        </View>
    );
};