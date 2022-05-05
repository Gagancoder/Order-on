import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator,createNavigator,createNavigationContainer } from 'react-navigation';

// IMPORTING LOGIN SYSTEM SCREENS
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignInScreen from './screens/SingInScreen';
import Already from './screens/Registeres';
//IMPORTING DRAWER SCREENS
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// IMPORTING HOME SCREENS
import Home from './screens/Home';
import Hotel_Veg from './screens/Hotel-Veg';
import Hotel_NonVeg from './screens/Hotel_Non-Veg';
import Veges from './screens/Veges';
import Fruits from './screens/Fruits';
import Chicken from './screens/Meat';
import Grocry from './screens/Grocries';
//IMPORTING ORDER SCREENS
import Notifications from './screens/NotificationScreen';
import Onions from './OrdersVeges/OrderOnion';
import Mushrooms from './OrdersVeges/OrderMushroom';
import Bell_Peppers from './OrdersVeges/OrderBell_Pepper';
import Potatos from './OrdersVeges/OrderPotato';
import Tomatos from './OrdersVeges/OrderTomato';
import MyHeader from './components/MyHeader';
import Profile from './screens/Profile';
import Dal from './Order_Hotel-Veg/OrderDal';
import Fried_Fish from './Order_Hotel-NonVeg/Order_Fried-Fish';
import Apple from './Order_Fruits/Order_Apple';
// IMPORTING FIREBASE
import firebase from 'firebase';
import { firebaseConfig } from './config';
import  {Drawers}  from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import { AppStackNavigator } from './components/AppStackNavigator';
////
export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  LoadingScreen: { screen: LoadingScreen },
  LoginScreen: { screen: LoginScreen },
  SignInScreen: { screen: SignInScreen },
  Already: { screen: Already },
  AppStackNavigator: { screen: AppStackNavigator },
  BottomTab: { screen: AppTabNavigator },
  AppDrawerNavigator: { screen: Drawers },
});

const AppContainer = createAppContainer(switchNavigator);
