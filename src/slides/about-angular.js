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
      <ListItem margin="10px 0 0 0">Framework used by Google, GM, Youtube, Microsoft, etc.</ListItem>
      <ListItem margin="10px 0 0 0">Highly Opinionated, Not flexible</ListItem>
      <ListItem margin="10px 0 0 0">All in one solution meant for larger applications</ListItem>
      <ListItem margin="10px 0 0 0">Typescript, Observables (rxjs), Injectables, Services, Components, Pipes, Modules, etc.</ListItem>
    </List>
  </Slide>
);

export default AboutAngular;