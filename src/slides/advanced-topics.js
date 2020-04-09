import React from 'react';

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle';

const AdvancedTopics = () => (
  <Slide bgColor="primary">
  <Heading size={3} textColor="secondary">Important Concepts to Learn Next</Heading>
    <List textColor="tertiary">
      {/* The ability to render html in child components. Can essentially use the component as if it was a normal div and either pass the markup as an attribute or just inside the two component tags. This allows you to keep state at a more flat level. It also allows you to have more dynamic content inside of the component. This is super helpful for things like cards or modals.  */}
      <ListItem margin="10px 0 0 0">Component Composition</ListItem>
      {/* Generally, you will pull data from an API so you will need a hook to call things on load, and possibly even every rerender. You will also need to sometimes run a cleanup function after your component unmounts (clearing timeouts, etc). (componentDidMount , componentWillUnMount , componentDidUpdate)  */}
      <ListItem margin="10px 0 0 0">useEffect Hook - Lifecycle</ListItem>
      {/* Lets you take pieces of your component logic and put it into reusable functions that can contain their own state, similiar to components. */}
      <ListItem margin="10px 0 0 0">Custom Hooks</ListItem>
      {/* Learn how to write testable code, react makes this easier. Especially with hooks and the way react kind of makes you write things in a  functional way. (immutability, etc) */}
      <ListItem margin="10px 0 0 0">Testing</ListItem>

      {/* Not going to explain this since its a tough concept to get into your head at first. */}
      <ListItem margin="10px 0 0 0">useReducer hook</ListItem>

      {/* Essentially global state - using this with useReducer actually gets rid of the need for Redux if you use it for global state. Super useful if you have an app where you need some part or the whole state in a lot of the same components. (Global theme for example)*/}
      <ListItem margin="10px 0 0 0">Context</ListItem>
    </List>
  </Slide>
);

export default AdvancedTopics;
