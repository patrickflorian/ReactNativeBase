import React from "react";
import {
  Button,
  Text,
  Container,
  Content,
  Input,
  Item,
  Label
} from "native-base";

export default class NineChat extends React.Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Jade Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            info
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => {/* navigate("ProfileScreen", { name: "Nine" }) */}}
          >
            <Text>Goto Jade Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}