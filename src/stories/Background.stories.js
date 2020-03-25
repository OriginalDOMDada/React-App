import React from 'react';
import { action } from '@storybook/addon-actions';

import Background from './../components/Background.js';

export default {
  component: Background,
  title: 'Background'
};

export const Static = () => (
    <Background onClick={action('clicked')}>
    </Background>
  );