import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const StatevsProps = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Props vs State</Heading>
    <Heading margin="10px 0 0 0" textColor="tertiary" size={6} textAlign="left">Props</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Immutable data that is passed in by the parent</ListItem>
      <ListItem margin="10px 0 0 0">This data should not be changed by the child component</ListItem>
    </List>
    <Heading margin="10px 0 0 0" textColor="tertiary" size={6} textAlign="left">State</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Private component data that changes over time through events</ListItem>
      <ListItem margin="10px 0 0 0">State is what allows us to make the app interactive</ListItem>
    </List>
  </Slide>
);

export default StatevsProps;