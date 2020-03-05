import React from 'react';
import {
  Slide,
  Heading,
  Text
} from 'spectacle';
import Logo from '../assets/react-logo.png';
const IntroSlide = () => (
  <Slide bgColor="primary">
    <img src={Logo} alt="reactjs logo" class="intro__logo"></img>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      React Brown Bag
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={3}>
      Shane Cook
    </Text>
  </Slide>
);

export default IntroSlide;