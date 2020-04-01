import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './../components/Button.js';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button text="Button" ></Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
