import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import Blog from '@/app/blog/page';

const meta: Meta<typeof Blog> = {
  title: 'UI Library/Blog',
  component: Blog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Blog>;

export const Static: Story = {};

