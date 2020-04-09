import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem,
  Link
} from 'spectacle';

const PeopleToFollow = () => (
  <Slide bgColor="primary">
    {/* Following people on Twitter is an awesome way to keep up to date with things going on in the development community whether that be political, tech stacks, whats happening next in react, etc. If you follow a couple devs eventually they will retweet and stuff and you can find more awesome developers to follow! */}
    <Heading size={3} textColor="secondary">Who to follow</Heading>
    <List textColor="tertiary">
      {/* Brian Holt - React, he jumps around a lot but he has worked at Reddit, Netflix, LinkedIn, now he works on the VSCode team @ Microsoft. */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/holtbt" textColor="tertiary" textSize="32">Brian Holt</Link></ListItem>
      {/* Wes Bos - React, online teaching, podscasts, Canadian and makes some dope bbq stuff */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/wesbos" textColor="tertiary" textSize="32">Wes Bos</Link></ListItem>
      {/* Dan Abramov - Co-creator of Redux, works on React team at facebook. Awesome guy to follow. */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/dan_abramov" textColor="tertiary" textSize="32">Dan Abramov</Link></ListItem>
      {/* Vue, design, etc. Awesome designer / developer currently on the Netlify team */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/sarah_edo" textColor="tertiary" textSize="32">Sara Drasner</Link></ListItem>
      {/* Cassidy - React developer, teacher, keyboards, and makes things fun. */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/cassidoo" textColor="tertiary" textSize="32">Cassidy Williams</Link></ListItem>
      {/* John Papa - Angular guy who got a lot of angry emails when the whole Papa Johns PR stuff was going on */}
      <ListItem margin="10px 0 0 0"><Link href="https://twitter.com/John_Papa" textColor="tertiary" textSize="32">John Papa</Link></ListItem>
    </List>
  </Slide>
);

export default PeopleToFollow;