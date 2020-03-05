import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const Overview = () => (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Overview</Heading>
    <List textColor="tertiary">
      <ListItem>What is React?</ListItem>
      <ListItem margin="10px 0 0 0">Why React?</ListItem>
      <ListItem margin="10px 0 0 0">What to learn before React</ListItem>
      {/* (Classes, Hooks, examples) */}
      <ListItem margin="10px 0 0 0">How to use React</ListItem>
      <ListItem margin="10px 0 0 0">Where to go next?</ListItem>
    </List>
  </Slide>
);

export default Overview;