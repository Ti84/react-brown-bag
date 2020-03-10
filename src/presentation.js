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
import WhatIsReact from './slides/whatisreact';
import ImageSlide from './slides/image-slide';

import ToolsUsageGraph from './assets/tool-graph.PNG';

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
        <WhatIsReact></WhatIsReact>
        <ImageSlide imgAlt="usage graph" imgRefSrc="https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results" img={ToolsUsageGraph} imgDesc="JavaScript Tools by Use"></ImageSlide>
      </Deck>
    );

export default Presentation;