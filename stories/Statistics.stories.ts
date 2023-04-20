import Statistics from '@/app/ui/molecules/Statistics';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Statistics> = {
  title: 'UI Library/Statistics',
  component: Statistics,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Statistics>;

export const Static: Story = {};

