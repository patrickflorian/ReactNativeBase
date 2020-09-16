import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import AccordionIconExample from './AccordionIconExample';
export default class DefaultHeader extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#039BE5'}}  androidStatusBarColor='#039BE5'>
          <Left>
            <Button transparent>
              <Icon name="menu-outline" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <AccordionIconExample/>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}