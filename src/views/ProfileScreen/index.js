import React, { Component } from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default DrawNav = () => <Stack.Navigator initialRouteName="Profile">
  <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="EditScreenOne" component={EditScreenOne} />
  <Stack.Screen name="EditScreenTwo" component={EditScreenTwo} />
</Stack.Navigator>
;
