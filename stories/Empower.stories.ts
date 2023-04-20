import Empower from '@/app/ui/molecules/Empower';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Empower> = {
  title: 'UI Library/Empower',
  component: Empower,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Empower>;

export const Static: Story = {};
