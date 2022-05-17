import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons,AntDesign } from '@expo/vector-icons';

import Main from './screens/Main';
import Page2 from './screens/Page2';

//user tabs
import Settings from './screens/user_screens/Settings';
import Profile from './screens/user_screens/Profile';

//admin Tabs
import Manager from './screens/admin_screens/Manager';
import Database from './screens/admin_screens/Database';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function UserTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: () => (
                    <Ionicons name="settings" size={18} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="customerservice" size={18} />
                    ),
                }} />
        </Tab.Navigator>
    )
}


function AdminTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Manager" component={Manager} options={{
                tabBarIcon: () => (
                    <AntDesign name="customerservice" size={18} />
                ),
            }} />
            <Tab.Screen name="Database" component={Database}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="user" size={18} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen name="Page2" component={Page2} />
                <Stack.Screen name="UserTabs" component={UserTabs} options={{ headerShown: false }} />
                <Stack.Screen name="AdminTabs" component={AdminTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}