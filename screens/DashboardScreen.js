import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../components/AppDrawerNavigator";
import Hotel_Veg from '../screens/Hotel-Veg';
import TabNavigator from '../components/AppDrawerNavigator';

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
