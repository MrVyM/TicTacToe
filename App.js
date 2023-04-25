import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/home'
import Settings from './components/settings'
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name="Settings" options={{
          //tabBarIcon: faHome,
          tabBarBadge: 3,
        }} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

