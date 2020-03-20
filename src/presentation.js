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
import Destructuring from './assets/destructuring.svg';
import Modules from './assets/modules.svg';
import ES6Classes from './assets/es6class.svg';
import ES5Classes from './assets/es5class.svg';

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

        {/* Default to writing const, only change to let when you know you are going to change the value */}
        {/* Note that you can still mutate const, need to freeze the object to stop that */}
        <ImageSlide imgAlt="let const declarations" imgRefSrc="https://carbon.now.sh/" img={ConstLet} imgDesc="let / const"></ImageSlide>

        {/* es5 uses function keyword, parenthesis and params inside if you need them, then whatever you want the function to do inside */}
        {/* => essentially just replaces the function keyword */}
        {/* even with return keyword you can use parenthesis for returning multiple lines at one time, important for jsx */}
        <ImageSlide imgAlt="arrow functions" imgRefSrc="https://carbon.now.sh/" img={ArrowFunctionSImage} imgDesc="Arrow Functions"></ImageSlide>

        {/* Probably the best update from es6 */}
        <ImageSlide imgAlt="array methods" imgRefSrc="https://carbon.now.sh/" img={ArrayMethods} imgDesc="Array methods"></ImageSlide>

        {/* Destructuring is just an easy way to keep your code clean and easy to read */}
        {/* keys that you want the value of on the left inside brackets, object you want to destructure on the right side */}
        {/* can set defaults on function params as well without destructuring now with es6 as well */}
        <ImageSlide imgAlt="destructuring" imgRefSrc="https://carbon.now.sh/" img={Destructuring} imgDesc="Destructuring"></ImageSlide>

        {/* Named exports need brackets around them and you can have multiple, can only have one default export and it does not beed brackets around it when importing */}
        <ImageSlide imgAlt="modules" imgRefSrc="https://carbon.now.sh/" img={Modules} imgDesc="Modules" imgStyle='md'></ImageSlide>

        {/* Easier to write / read */}
        <ImageSlide imgAlt="es6 classes" imgRefSrc="https://carbon.now.sh/" img={ES6Classes} imgDesc="es6 classes"></ImageSlide>
        <ImageSlide imgAlt="es5 classes" imgRefSrc="https://carbon.now.sh/" img={ES5Classes} imgDesc="es5 classes"></ImageSlide>
        {/* 
        - Thinking in React (Show page with components on it and describe how you compose small logical pieces of the ui together to create a bigger more complex ui)
        - Page we will build using React
        - Getting App Started - Show npx create-react-app, app component, how it just replaces root element, etc.
        - First Component - Mention JSX and how you can omit it but it is a lot more difficult to write React without it and you should use it. 
        - Add first component to app component - explain how generally each page would correspond to a route but in our case we have no router for the app since we hadn't added one.
        - Second component
        */}

      </Deck>
    );

export default Presentation;