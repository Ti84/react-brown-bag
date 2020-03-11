import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const AboutReact = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">React</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Library used by Facebook, Twitter, Pinterest, Netflix, Carvana, Uber</ListItem>
      <ListItem margin="10px 0 0 0">Virtual DOM</ListItem>
      <ListItem margin="10px 0 0 0">Most used javascript tool, can practically find all problems on Google / Stack Overflow</ListItem>
      <ListItem margin="10px 0 0 0">Huge community</ListItem>
      <ListItem margin="10px 0 0 0">JSX, ES2015+, CSS (Typescript, other preprocessors, css in js, etc)</ListItem>
    </List>
  </Slide>
);

export default AboutReact;