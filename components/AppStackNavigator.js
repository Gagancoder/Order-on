import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Hotel_Veg from '../screens/Hotel-Veg';
import Fruits from '../screens/Fruits';
import Hotel_NonVeg from '../screens/Hotel_Non-Veg';
import Veges from '../screens/Veges';
import Notification from '../screens/NotificationScreen';
import Meat from '../screens/Meat';
//////////////////////////////////////////////////////////
import Onion from '../OrdersVeges/OrderOnion';
import Mushroom from '../OrdersVeges/OrderMushroom';
import Bell_Pepper from '../OrdersVeges/OrderBell_Pepper';
import Potato from '../OrdersVeges/OrderPotato';
import Tomato from '../OrdersVeges/OrderTomato';
////////////////////////////////////////////////////////////////////
import MyHeader from '../components/MyHeader';
import Profile from '../screens/Profile';
import Dal from '../Order_Hotel-Veg/OrderDal';
import Family_Fun from '../Order_Hotel-Veg/Order_FamilyFood';
import Paneer from '../Order_Hotel-Veg/Order_Paneer';
import Tandoori_Roti from '../Order_Hotel-Veg/Order_Tandoori-Roti';
import Mix_Veg from '../Order_Hotel-Veg/Order_Mix-Veg';
import Fried_Fish from '../Order_Hotel-NonVeg/Order_Fried-Fish';
import Mutten_Cury from '../Order_Hotel-NonVeg/Order_Mutten-Cury';
import Fried_Chicken from '../Order_Hotel-NonVeg/Order_Fried-Chicken';
import Egg_Cury from '../Order_Hotel-NonVeg/Order_Egg-Cury';
import Chicken_Cury from '../Order_Hotel-NonVeg/Order_Chicken-Cury';
/////////////////////////////////////////////////////////////////
import Apple from '../Order_Fruits/Order_Apple';
import Banana from '../Order_Fruits/Order_Banana';
import Mango from '../Order_Fruits/Order_Mango';
import Guava from '../Order_Fruits/Order_Guava';
import Orange from '../Order_Fruits/Order_Orange';
//////////////////////////////////////////////////////////////
import Grocry from '../screens/Grocries';
import CustomSideBarMenu from './CustomSidebarMenu';
import{ AppDrawerNavigator }from './AppDrawerNavigator'
export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { headerShown: false },
    },
    ////////////////////////////////////////////////////////////////////////////////////

    Hotel_Veg: {
      screen: Hotel_Veg,
      navigationOptions: { headerShown: false },
    },
    Paneer: {
      screen: Paneer,
      navigationOptions: { headerShown: false },
    },
    Tandoori_Roti: {
      screen: Tandoori_Roti,
      navigationOptions: { headerShown: false },
    },
    Mix_Veg: {
      screen: Mix_Veg,
      navigationOptions: { headerShown: false },
    },
    Family_Fun: {
      screen: Family_Fun,
      navigationOptions: { headerShown: false },
    },
    Dal: {
      screen: Dal,
      navigationOptions: { headerShown: false },
    },
    ///////////////////////////////////////////////////////////////////////////////////////
    Hotel_NonVeg: {
      screen: Hotel_NonVeg,
      navigationOptions: { headerShown: false },
    },
    Fried_Fish: {
      screen: Fried_Fish,
      navigationOptions: { headerShown: false },
    },
    Mutten_Cury: {
      screen: Mutten_Cury,
      navigationOptions: { headerShown: false },
    },
    Chicken_Cury: {
      screen: Chicken_Cury,
      navigationOptions: { headerShown: false },
    },
    Egg_Cury: {
      screen: Egg_Cury,
      navigationOptions: { headerShown: false },
    },
    Fried_Chicken: {
      screen: Fried_Chicken,
      navigationOptions: { headerShown: false },
    },
    /////////////////////////////////////////////////////////////////////////////////////
    Veges: {
      screen: Veges,
      navigationOptions: { headerShown: false },
    },
    Onion: {
      screen: Onion,
      navigationOptions: { headerShown: false },
    },
    Potato: {
      screen: Potato,
      navigationOptions: { headerShown: false },
    },
    Tomato: {
      screen: Tomato,
      navigationOptions: { headerShown: false },
    },
    Bell_Pepper: {
      screen: Bell_Pepper,
      navigationOptions: { headerShown: false },
    },
    Mushroom: {
      screen: Mushroom,
      navigationOptions: { headerShown: false },
    },
    ///////////////////////////////////////////////////////////////////////////////////////////
    Meat: {
      screen: Meat,
      navigationOptions: { headerShown: false },
    },
    ///////////////////////////////////////////////////////////////////////////////////////////
    Grocry: {
      screen: Grocry,
      navigationOptions: { headerShown: false },
    },
    //////////////////////////////////////////////////////////////////////////////////////////
    Fruits: {
      screen: Fruits,
      navigationOptions: { headerShown: false },
    },
    Apple: {
      screen: Apple,
      navigationOptions: { headerShown: false },
    },
    Banana: {
      screen: Banana,
      navigationOptions: { headerShown: false },
    },
    Orange: {
      screen: Orange,
      navigationOptions: { headerShown: false },
    },
    Guava: {
      screen: Guava,
      navigationOptions: { headerShown: false },
    },
    Mango: {
      screen: Mango,
      navigationOptions: { headerShown: false },
    },
    Notification: {
      screen: Notification,
      navigationOptions: { headerShown: false },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'AppDrawerNavigator',
  }
);
