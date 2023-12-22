import { StatusBar, View } from 'react-native';
import { IntlProvider } from 'react-intl';
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider, MD2LightTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import { PromisesProvider } from './src/contexts/promises.context';
import { UserProvider } from './src/contexts/user.context';

import { ScreenManager } from './src/components/layout/ScreenManager';
import { PRIMARY_COLOR, globalStyles } from './src/styles';

export default function App() {
  return (
    <PaperProvider theme={MD2LightTheme}>
      <IntlProvider locale={navigator.language || 'en'}>
        <PromisesProvider>
          <UserProvider>
            <NavigationContainer>
              <View style={globalStyles.app}>
                <ScreenManager />
              </View>
              <StatusBar backgroundColor={PRIMARY_COLOR} />
            </NavigationContainer>
          </UserProvider>
        </PromisesProvider>
      </IntlProvider>
      <Toast />
    </PaperProvider>
  );
}
