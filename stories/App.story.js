// Importing global styling
import '../src/styles/global.scss';

// JS import
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import of the component
import App from '../src/containers/App';

/**
 * Props
 * NOTE: that if you want knobs like [boolean, or text], better to use down directly
 * Otherwise Storybook knobs will not effect changes
 */
const props = {};
/**
 * Stories: App
 */
storiesOf('General.App', module).add('Default', () => <App {...props} />);
