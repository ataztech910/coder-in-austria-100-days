import StatisticsLayout from '@/app/ui/molecules/StatisticsLayout';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatisticsLayout> = {
  title: 'UI Library/Statistics Layout',
  component: StatisticsLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof StatisticsLayout>;

export const Static: Story = {};

