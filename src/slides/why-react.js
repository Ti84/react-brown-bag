import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const WhyReact = () => (
  // Why did I choose react?
  // I really like how it feels like you are writing javascript and not learning a new way of doing things like you have to for vue / React. I love the React community and the ability to just be able to google anything is amazing. However, I have not used Vue too much and I am excited to learn that one and Svelte. Vue is huge in China and growing way quicker than React did and everyone I have talked to who has tried it really loves using Vue.
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Why React</Heading>
    <List textColor="tertiary">
      {/* Since the community is so big, it is hard to run into a problem no one has solved yet */}
      {/* Easy to get involved in the community and contribute to open source projects */}
      <ListItem margin="10px 0 0 0">Very strong community</ListItem>

      {/* A ton of libraries were made for React given how large the community is, so the options are endless */}
      {/* ex. for a while instead of using React router it was good to use a different one because it was more compliant to a11y. */}
      <ListItem margin="10px 0 0 0">Great ecosystem</ListItem>

      {/* You write Javascript instead of Angular */}
      <ListItem margin="10px 0 0 0">You write Javascript (or TS)</ListItem>
      <ListItem margin="10px 0 0 0">Scales well</ListItem>

      {/* No framework so you can do whatever you want with it, just if you want a scalable app just make sure you have a style guide and avoid anti patterns */}
      <ListItem margin="10px 0 0 0">Flexible</ListItem>
  
      {/* No breaking changes, the team behind React makes sure the Angular 2 stuff doesn't happen again, ex. React Hooks */}
      <ListItem margin="10px 0 0 0">Stable</ListItem>
    </List>
  </Slide>
);

export default WhyReact;