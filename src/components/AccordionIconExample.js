import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionIconExample extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} icon="add" expandedIcon="add" iconStyle={{color: 'red'}}/>
        </Content>
      </Container>
    );
  }
}