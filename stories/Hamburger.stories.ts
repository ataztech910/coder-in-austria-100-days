import SideBarHamburger from '@/app/ui/atoms/SidebarHamburger';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SideBarHamburger> = {
  title: 'UI Library/Sidebar hamburger',
  component: SideBarHamburger,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SideBarHamburger>;

export const Closed: Story = {
  args: {
    handleClick: () => void 0,
  },
};

export const Open: Story = {};
