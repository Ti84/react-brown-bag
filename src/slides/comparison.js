import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const AboutVue = () => (

  // Why did I choose react?
  // I really like how it feels like you are writing javascript and not learning a new way of doing things like you have to for vue / React. I love the React community and the ability to just be able to google anything is amazing. However, I have not used Vue too much and I am excited to learn that one and Svelte. Vue is huge in China and growing way quicker than React did and everyone I have talked to who has tried it really loves using Vue.
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Comparisons</Heading>
    <List textColor="tertiary">

      <ListItem margin="10px 0 0 0">Vue's creator has said it to be pretty much a stripped down version of Angular</ListItem>

      <ListItem margin="10px 0 0 0">Vue / React use a virtual DOM, Angular does not</ListItem>

      <ListItem margin="10px 0 0 0">Vue / React is flexible, Angular is not</ListItem>

      {/* Easy to understand the code or someone else has written later, no template programming like there is in vue / react */}
      <ListItem margin="10px 0 0 0">React has the least amount of "magic" and is very verbose</ListItem>

      {/* Community Consensous for the most part */}
      <ListItem margin="10px 0 0 0">Angular is best for enterprise development, React / Vue is better for smaller applications</ListItem>

    </List>
  </Slide>
);

export default AboutVue;