import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>I should be a green button</Button>;