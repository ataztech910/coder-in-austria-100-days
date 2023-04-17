import type { Meta, StoryObj } from '@storybook/react';
import BottomSeparator from '@/app/ui/atoms/BottomSepaarator';

const meta: Meta<typeof BottomSeparator> = {
  title: 'Example/BottomSeparator',
  component: BottomSeparator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BottomSeparator>;

export const Static: Story = {};
