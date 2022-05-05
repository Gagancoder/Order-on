import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';
import Setting from '../screens/SettingsScreen';
import HomeScreen from '../screens/Home'
export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={{uri:'https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg'}}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: 'Home',
    },
  },
  Settings: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={{uri:'https://cdn.pixabay.com/photo/2019/08/11/18/30/icon-4399639_1280.png'}}
          style={{ width: 20, height: 20 ,}}
        />
      ),
      tabBarLabel: 'Settings',
    },
  },
});
