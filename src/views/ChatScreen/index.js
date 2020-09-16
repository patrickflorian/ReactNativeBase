import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button,Container, Text, Icon, Footer, FooterTab, Header, Tab, Tabs, Title, Left, Right, Body } from "native-base";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createMaterialTopTabNavigator();

export default (MainScreenNavigator = (props) => {
  return (
    <Container>
      <Header hasTabs >
          <Left>
            <Button
              transparent
              onPress={() => props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Chat</Title>
          </Body>
          <Right />
        </Header>
      <Tabs>
        <Tab heading="Lucy">
          <LucyChat />
        </Tab>
        <Tab heading="Jade">
          <JadeChat />
        </Tab>
        <Tab heading="Nine">
          <NineChat />
        </Tab>
      </Tabs>
    </Container>
  );
}
);
