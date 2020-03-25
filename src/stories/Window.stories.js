import React from 'react';
import { action } from '@storybook/addon-actions';

import Window from './../components/Window.js';

export default {
  component: Window,
  title: 'Window'
};

export const Static = () => (
    <Window onClick={action('clicked')}>
    </Window>
  );