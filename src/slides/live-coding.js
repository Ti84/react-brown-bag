import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

const LiveCoding = () => (
  <Slide bgColor="primary">
    <Heading size={3} textColor="secondary">Live Coding</Heading>
    <List textColor="tertiary">
      <ListItem margin="10px 0 0 0"><Link href="https://codepen.io/ti84/pen/NWqZRyX" textColor="tertiary" target="_blank">https://codepen.io/ti84/pen/NWqZRyX</Link></ListItem>
    </List>
  </Slide>
);

export default LiveCoding;