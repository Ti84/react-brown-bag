import React from 'react';

import {
  Slide,
  Heading
} from 'spectacle';

import functionComponent from '../assets/functional-component.svg';
import classComponent from '../assets/class-component.svg';

const ClassvsFunction = () => (
  <Slide bgColor="primary" width="100%">
      <Heading size={3} textColor="secondary">
        Class vs Function Components
      </Heading>
      <div className="full-width">
        <div className="two-col">
          <div>
            <Heading size={4} textColor="tertiary">Function</Heading>
            <img src={classComponent} alt="class comp"></img>
          </div>
          <div>
            <Heading size={4} textColor="tertiary">Class</Heading>
            <img src={functionComponent} alt="function comp"></img>
          </div>
        </div>
      </div>
  </Slide>
);

export default ClassvsFunction;