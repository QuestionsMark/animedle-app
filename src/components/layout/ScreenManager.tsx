import { ReactNode } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { useUser } from "../../contexts/user.context";

import { Settings } from "../../screens/Settings/Settings";
import { Login } from "../../screens/Login/Login";
import { Register } from "../../screens/Register/Register";
import { AnimedleScreen } from "../../screens/Animedle/AnimedleScreen";
import { ProfileScreen } from "../../screens/Profile/ProfileScreen";
import { HistoryScreen } from "../../screens/History/HistoryScreen";
import { Ranking } from "../../screens/Ranking/Ranking";

export type TabList = {
    Animedle: undefined;
    History: undefined;
    Profile: undefined;
    Settings: undefined;
    Login: undefined;
    Register: undefined;
    Ranking: undefined;
};

interface NavTab {
    name: keyof TabList;
    label: string;
    icon: (color: string) => ReactNode;
    component: () => JSX.Element;
    tabBarColor: string;
}

const Tab = createMaterialBottomTabNavigator<TabList>();

const loginTabArr: NavTab[] = [
    {
        name: 'Animedle',
        label: 'Quiz',
        icon: (color: string) => <MaterialCommunityIcons name="sword" size={26} color={color} />,
        component: AnimedleScreen,
        tabBarColor: '#564875',
    },
    {
        name: 'Ranking',
        label: 'Ranking',
        icon: (color: string) => <FontAwesome name="trophy" size={26} color={color} />,
        component: Ranking,
        tabBarColor: '#61547E',
    },
    {
        name: 'Profile',
        label: 'Profile',
        icon: (color: string) => <MaterialCommunityIcons name="face-man-profile" size={26} color={color} />,
        component: ProfileScreen,
        tabBarColor: '#6D6188',
    },
    {
        name: 'History',
        label: 'History',
        icon: (color: string) => <MaterialIcons name="history" size={26} color={color} />,
        component: HistoryScreen,
        tabBarColor: '#796E92',
    },
    {
        name: 'Settings',
        label: 'Settings',
        icon: (color: string) => <MaterialIcons name="settings" size={26} color={color} />,
        component: Settings,
        tabBarColor: '#857A9B',
    },
];

const logoutTabArr: NavTab[] = [
    {
        name: 'Login',
        label: 'Log in',
        icon: (color: string) => <MaterialCommunityIcons name="power" size={26} color={color} />,
        component: Login,
        tabBarColor: '#564875',
    },
    {
        name: 'Register',
        label: 'Create account',
        icon: (color: string) => <Entypo name="plus" size={28} color={color} />,
        component: Register,
        tabBarColor: '#61547E',
    },
];

export const ScreenManager = () => {
    const { user } = useUser();

    return (<>{user ? <ScreenManager.Login /> : <ScreenManager.Logout />}</>);
};

ScreenManager.Login = () => {
    return (
        <Tab.Navigator
            inactiveColor="#DDDAE3"
            activeColor="#fff"
            shifting
            compact
        >
            {loginTabArr.map(({ component, icon, label, name, tabBarColor }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarColor,
                        tabBarIcon: ({ color }) => icon(color),
                        tabBarLabel: label,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};
ScreenManager.Logout = () => {
    return (
        <Tab.Navigator
            inactiveColor="#CBC7D5"
            activeColor="#fff"
            shifting
            compact
        >
            {logoutTabArr.map(({ component, icon, label, name, tabBarColor }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarColor,
                        tabBarIcon: ({ color }) => icon(color),
                        tabBarLabel: label,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};