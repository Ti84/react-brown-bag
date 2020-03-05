// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import IntroSlide from './slides/intro';
import Overview from './slides/overview';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#071013',
    secondary: '#00CCFF',
    tertiary: '#F0EDEE',
    quaternary: '#2C666E',
    quinary: '#90DDF0'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const Presentation = () => (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <IntroSlide></IntroSlide> 
        <Overview></Overview>
      </Deck>
    );

export default Presentation;