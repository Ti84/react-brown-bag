import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

const WhereToLearnMore = () => (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Where to learn more</Heading>
    <List textColor="tertiary">
    <ListItem margin="10px 0 0 0"><Link href="https://reactjs.org/" textColor="tertiary" textSize="32">React Documentation</Link></ListItem>
      {/* These are all fantastic for any skill level - whether react or building skills before getting into it. */}
      {/* For React I highly recommend Brian Holt's introduction to React. I also highly reccomend Will Sentance's courses on javascript. Sarah Dresner has a good Vue and design for developers on here as well. Everything in here is gold. */}
      <ListItem margin="10px 0 0 0"><Link href="https://frontendmasters.com/" textColor="tertiary" textSize="32">Front End Masters (All front end technologies)</Link></ListItem>
      {/* Good intro to React, Full stack React, into to Javascript, ES6, CSS, etc. */}
      <ListItem margin="10px 0 0 0"><Link href="https://wesbos.com/" textColor="tertiary" textSize="32">Wes Bos' Courses</Link></ListItem>
      <ListItem margin="10px 0 0 0"><Link href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" textColor="tertiary" textSize="32">Brad Traversy Youtube / Udemy Courses</Link></ListItem>
    </List>
  </Slide>
);

export default WhereToLearnMore;