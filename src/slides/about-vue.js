import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const AboutVue = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Vue</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">Framework used by 9Gag, Infusionsoft, Alibaba</ListItem>
      <ListItem margin="10px 0 0 0">Combines ideas from React and Angular into one framework</ListItem>
      <ListItem margin="10px 0 0 0">Virtual DOM</ListItem>

      {/* Recommended to use official but you can use whatever */}
      <ListItem margin="10px 0 0 0">Vue ecosystem on their website (server side rendering, vuex, routing, etc)</ListItem>

      <ListItem margin="10px 0 0 0">Javascript, Html, CSS (JSX, Typescript, other pre-processors)</ListItem>
    </List>
  </Slide>
);

export default AboutVue;