import { StatusBar } from 'expo-status-bar';
import { PromisesProvider } from './src/contexts/promises.context';
import { View } from 'react-native';
import { globalStyles } from './src/styles';
import Toast from 'react-native-toast-message';
import { ScreenManager } from './src/components/layout/ScreenManager';

export default function App() {
  return (
    <PromisesProvider>
      <View style={globalStyles.app}>
        <ScreenManager />
        <Toast />
      </View>
      <StatusBar style="auto" />
    </PromisesProvider>
  );
}
