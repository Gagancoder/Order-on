import React, { Component } from 'react';
import CustomSideBarMenu from './CustomSidebarMenu';
import SettingScreen from '../screens/SettingsScreen';
import Home from '../screens/Home';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MyOrders from '../screens/Orderscreen';
import {Icon} from 'react-native-elements';
import Notifications from '../screens/NotificationScreen';


export default AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : Home,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    MyOrders : {
      screen : MyOrders,
      navigationOptions:{
        drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "My Orders"
    }
    },
    Notifications : {
      screen : Notifications,
      navigationOptions:{
        drawerIcon : <Icon name="bell" type ="font-awesome" />,
    }
    },
    Settings : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
    },
  },
  {
    initialRouteName : 'Home'
  })