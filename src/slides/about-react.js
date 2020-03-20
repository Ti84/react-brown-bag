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
      <ListItem margin="10px 0 0 0">Used by Facebook, Twitter, Pinterest, Netflix, Carvana, Uber</ListItem>
      <ListItem margin="10px 0 0 0">Easy to learn and keep the whole library in your head</ListItem>
      <ListItem margin="10px 0 0 0">It's a library not a framework, so you have to add every tool you want to it</ListItem>
      <ListItem margin="10px 0 0 0">JSX, ES2015+, CSS (Typescript, other preprocessors, css in js, etc)</ListItem>
    </List>
  </Slide>
);

export default AboutReact;