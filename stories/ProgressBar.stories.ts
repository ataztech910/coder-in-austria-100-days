import ProgressBar from '@/app/ui/atoms/ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'UI Library/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Static: Story = {
  args: { progress: 10 }
};

