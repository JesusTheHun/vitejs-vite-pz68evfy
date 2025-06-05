import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import './index.css'
import { HelloWorld } from './HelloWorld';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Header',
  component: HelloWorld,
  tags: ['test'],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['test'],
  play: async ({ canvas }) => {
    expect(canvas.getByRole('heading')).toBeInTheDocument()
  }
};
