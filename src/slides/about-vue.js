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

      <ListItem margin="10px 0 0 0">Used by 9Gag, Infusionsoft, Alibaba</ListItem>

      {/* People who use React or Angular will both find familiar concepts inside of Vue */}
      <ListItem margin="10px 0 0 0">Combines concepts of React and Angular into one framework</ListItem>

      <ListItem margin="10px 0 0 0">Most performant out of the box and is the smallest framework</ListItem>

      {/* Recommended to use official but you can use whatever */}
      <ListItem margin="10px 0 0 0">Vue ecosystem on their website (server side rendering, vuex, routing, etc)</ListItem>

      {/* Evan You wanted to create an easy / fast way for developters to get up and running while taking advantage of the new modern framework concepts and technologies. */}
      <ListItem margin="10px 0 0 0">Easiest to learn (arguably)</ListItem>

      <ListItem margin="10px 0 0 0">Javascript, Html, CSS (JSX, Typescript, other pre-processors)</ListItem>
    </List>
  </Slide>
);

export default AboutVue;