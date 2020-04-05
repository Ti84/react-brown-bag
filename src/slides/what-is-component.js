import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const WhatIsAComponent = () => (
    <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">What is a Component?</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">"Building Blocks" to React applications</ListItem>
      <ListItem margin="10px 0 0 0">Small reusable pieces of the UI (like lego bricks)</ListItem>
    </List>

    {/* Explain how the docs go further into how to determine what to make its own component. */}

    <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/08/React-Components-Example.jpeg?resize=768%2C417&ssl=1" alt="example app broken into pieces"></img>
  </Slide>
);

export default WhatIsAComponent;