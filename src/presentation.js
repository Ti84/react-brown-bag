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
import ImageSlide from './slides/image-slide';

import AboutAngular from './slides/about-angular';
import AboutVue from './slides/about-vue';
import AboutReact from './slides/about-react';
import WhyReact from './slides/why-react';
import CurrentSPATools from './slides/current-tools';
import BeforeReact from './slides/before-react';

import ToolsUsageGraph from './assets/tool-graph.PNG';
import ArrowFunctionSImage from './assets/arrowfunctions.svg'
import ConstLet from './assets/constlet.svg';
import ArrayMethods from './assets/arraymethods.svg';

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
        <CurrentSPATools></CurrentSPATools>
        <ImageSlide imgAlt="usage graph" imgRefSrc="https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results" img={ToolsUsageGraph} imgDesc="JavaScript Tools by Use"></ImageSlide>
        <AboutAngular></AboutAngular>
        <AboutVue></AboutVue>
        <AboutReact></AboutReact>
        <WhyReact></WhyReact>
        <BeforeReact></BeforeReact>
        <ImageSlide imgAlt="let const declarations" imgRefSrc="https://carbon.now.sh/" img={ConstLet} imgDesc="let / const"></ImageSlide>
        <ImageSlide imgAlt="arrow functions" imgRefSrc="https://carbon.now.sh/" img={ArrowFunctionSImage} imgDesc="Arrow Functions"></ImageSlide>
        <ImageSlide imgAlt="array methods" imgRefSrc="https://carbon.now.sh/" img={ArrayMethods} imgDesc="Array methods"></ImageSlide>
      </Deck>
    );

export default Presentation;