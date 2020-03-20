import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const AboutAngular = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Angular</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Used by Google, GM, Youtube, Microsoft, etc.</ListItem>
      <ListItem margin="10px 0 0 0">Opinionated, Not flexible</ListItem>
      <ListItem margin="10px 0 0 0">All in one solution that is good for larger applications</ListItem>
      <ListItem margin="10px 0 0 0">New major version releases every 6 months</ListItem>
      <ListItem margin="10px 0 0 0">Typescript, Observables (rxjs), Services, Components, Pipes, Modules, etc.</ListItem>
    </List>
  </Slide>
);

export default AboutAngular;