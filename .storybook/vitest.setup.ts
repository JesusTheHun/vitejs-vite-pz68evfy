import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';
import * as addonA11yAnnotations from '@storybook/addon-a11y/preview'

setProjectAnnotations([
  addonA11yAnnotations,
  projectAnnotations
]);