import { configure } from '@storybook/react';

// automatically import all files ending in *.story.js
configure(require.context('../stories', true, /\.story\.js$/), module);
