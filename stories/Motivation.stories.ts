import Motivation from '@/app/ui/molecules/Motivation';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Motivation> = {
  title: 'UI Library/Motivation',
  component: Motivation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Motivation>;

export const Static: Story = {};

