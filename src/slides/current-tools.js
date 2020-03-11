import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const CurrentSPATools = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Current Popular SPA Tools</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">React: Backed by Facebook (2013)</ListItem>
      <ListItem margin="10px 0 0 0">Vue: Ex-Google Employee Evan You, 100% community driven (2014)</ListItem>
      <ListItem margin="10px 0 0 0">Angular: Backed by Google (2010)</ListItem>
      <ListItem margin="10px 0 0 0">**Svelte: Rich Harris, 100% community driven  (2016)</ListItem>
    </List>
  </Slide>
);

export default CurrentSPATools;