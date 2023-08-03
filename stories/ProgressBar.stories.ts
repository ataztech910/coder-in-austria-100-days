import Motivation from '@/app/ui/atoms/ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Motivation> = {
  title: 'UI Library/ProgressBar',
  component: Motivation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Motivation>;

export const Static: Story = {
  args: { progress: 10 }
};

