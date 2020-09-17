import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
//import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SideBar } from "../SideBar/SideBar.js";
const Drawer = createDrawerNavigator();

const HomeScreenRouter  =(props)=>{
  return (
    <NavigationContainer theme={props.theme}>
      <Drawer.Navigator /* initialRouteName="Home" */ drawerContent={Props => <SideBar {...Props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Chat" component={MainScreenNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreenRouter;  