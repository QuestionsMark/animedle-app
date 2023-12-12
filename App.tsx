import { PromisesProvider } from './src/contexts/promises.context';
import { StatusBar, View } from 'react-native';
import { PRIMARY_COLOR, globalStyles } from './src/styles';
import Toast from 'react-native-toast-message';
import { ScreenManager } from './src/components/layout/ScreenManager';
import { UserProvider } from './src/contexts/user.context';
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, MD2LightTheme } from 'react-native-paper';
import { PopupProvider } from './src/contexts/popup.context';
import { IntlProvider } from 'react-intl';

export default function App() {
  return (
    <PaperProvider theme={MD2LightTheme}>
      <IntlProvider locale={navigator.language || 'en'}>
        <PromisesProvider>
          <PopupProvider>
            <UserProvider>
              <NavigationContainer>
                <View style={globalStyles.app}>
                  <ScreenManager />
                </View>
                <StatusBar backgroundColor={PRIMARY_COLOR} />
              </NavigationContainer>
            </UserProvider>
          </PopupProvider>
        </PromisesProvider>
      </IntlProvider>
      <Toast />
    </PaperProvider>
  );
}
