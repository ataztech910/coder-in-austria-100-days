import HeroBanner from '@/app/ui/molecules/HeroBanner';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HeroBanner> = {
  title: 'UI Library/Hero Banner',
  component: HeroBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

export const Static: Story = {};

