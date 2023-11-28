import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animedle } from "../../screens/Animedle/Animedle";
import { History } from "../../screens/History/History";
import { Profile } from "../../screens/Profile/Profile";
import { Settings } from "../../screens/Settings/Settings";

export type TabList = {
    Animedle: undefined;
    History: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<TabList>();

export const ScreenManager = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Animedle"
                    component={Animedle}
                />
                <Tab.Screen
                    name="History"
                    component={History}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};