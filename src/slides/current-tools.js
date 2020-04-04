import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const CurrentSPATools = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Popular Tools for Building Web Applications</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0">React: Backed by Facebook (2013)</ListItem>
      {/* Was super popular in China for a while, now it is taking off in US and other countries */}
      <ListItem margin="10px 0 0 0">Vue: Ex-Google Employee Evan You, 100% community driven (2014)</ListItem>
      {/* Started as Angularjs (Angular 1), then was rewritten to Angular (Angular 2) and that is where the community kind of dropped it and jumped ship to React eventually because most people didnt want to have to rewrite their whole code base. */}
      <ListItem margin="10px 0 0 0">Angular: Backed by Google (2010)</ListItem>
      <ListItem margin="10px 0 0 0">**Svelte: Rich Harris, 100% community driven (2016)</ListItem>
    </List>
  </Slide>
);

export default CurrentSPATools;