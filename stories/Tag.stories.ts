import Tag from '@/app/ui/atoms/Tag';
import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';

const meta: Meta<typeof Tag> = {
  title: 'UI Library/Tag',
  component: Tag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Static: Story = {
    args: {
        color: 'red',
        isSmall: false,
        title: 'JS'
      },
};

