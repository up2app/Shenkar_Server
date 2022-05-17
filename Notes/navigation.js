import React from 'react';
import Home from './screens/Home';
import Profile from './screens/Profile';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="profile" component={Profile} />
        </Drawer.Navigator>
    )
}
