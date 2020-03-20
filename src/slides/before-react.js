import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const BeforeReact = () => (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Before Starting React</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Basic understanding of JS, Html, CSS</ListItem>
    </List>
    <Heading margin="10px 0 0 0" textColor="tertiary" size={6} textAlign="left">Important Concepts:</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">es2015 variable declarations - let / const</ListItem>
      <ListItem margin="10px 0 0 0">Arrow functions</ListItem>
      <ListItem margin="10px 0 0 0">Array methods</ListItem>
      <ListItem margin="10px 0 0 0">Destructuring</ListItem>
      <ListItem margin="10px 0 0 0">es2015 Modules</ListItem>
      <ListItem margin="10px 0 0 0">es2015 class syntax</ListItem>
    </List>
  </Slide>
);

export default BeforeReact;