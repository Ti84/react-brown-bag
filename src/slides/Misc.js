import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

const Misc = () => (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Miscellaneous</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0"><Link href="https://dev.to/" textColor="tertiary" textSize="32">Dev.to (Medium sucks now)</Link></ListItem>
      {/* 2 React devs that have their own online courses and tutorials. Podcasts range from react to mental health in programming. Super good for keeping up with the industry and learning random fun things about development / life. */}
      <ListItem margin="10px 0 0 0"><Link href="https://syntax.fm/" textColor="tertiary" textSize="32">Syntax fm (podcast) - Wes Bos, Scott Tolinski</Link></ListItem>
      {/* Podcast lead by a manager at Netflix - They get drunk and talk about javascript or other front end technologies */}
      <ListItem margin="10px 0 0 0"><Link href="https://frontendhappyhour.com/" textColor="tertiary" textSize="32">Front End Happy Hour (podcast)</Link></ListItem>
      {/* Awesome place to meet other developers and learn some things. */}
      <ListItem margin="10px 0 0 0"><Link href="https://www.meetup.com/Phoenix-ReactJS/" textColor="tertiary" textSize="32">Reactjs Meetups</Link></ListItem>
    </List>
  </Slide>
);

export default Misc;