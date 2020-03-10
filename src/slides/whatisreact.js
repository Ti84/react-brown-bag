import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const WhatIsReact = () => (
  <Slide>
    <Heading fontSize={14} textColor="secondary">What is React?</Heading>
    <List textColor="tertiary">
      <ListItem>React is an open source <b>library</b> backed by Facebook</ListItem>
      <ListItem margin="10px 0 0 0">React is used to build user interfaces in small reusable pieces called components</ListItem>
      <ListItem margin="10px 0 0 0">React is currently the most popular front end tool</ListItem>
    </List>
  </Slide>
);

export default WhatIsReact;