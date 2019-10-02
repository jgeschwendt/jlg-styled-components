import { addDecorator } from '@storybook/react';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reboot } from 'styled-reboot';

const Reboot = createGlobalStyle`${reboot()}`;

addDecorator((storyFn) => (
  <React.Fragment>
    <Reboot />{storyFn()}
  </React.Fragment>
));
