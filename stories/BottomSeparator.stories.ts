import type { Meta, StoryObj } from '@storybook/react';
import BottomSeparator from '@/app/ui/atoms/BottomSeparator';

const meta: Meta<typeof BottomSeparator> = {
  title: 'UI Library/Bottom separator',
  component: BottomSeparator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BottomSeparator>;

export const Static: Story = {
  args: {
   isDark: false
},
};
