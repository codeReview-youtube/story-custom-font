// Importing global styling
import '../src/styles/global.scss';

// JS import
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import of the component
import Title from '../src/components/Title';

/**
 * Props
 * NOTE: that if you want knobs like [boolean, or text], better to use down directly
 * Otherwise Storybook knobs will not effect changes
 */
const props = {
  title: 'Something went well'
};
/**
 * Stories: Title
 */
storiesOf('General.Title', module).add('Default', () => <Title {...props} />);
