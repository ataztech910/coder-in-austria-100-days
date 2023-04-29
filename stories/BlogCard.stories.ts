import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import BlogCard from '@/app/ui/molecules/BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'UI Library/Blog card',
  component: BlogCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Static: Story = {
    args: {
        tag: {
            color: 'red',
            isSmall: false,
            title: 'JS'
        },
        title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
        date: 'Dec 06, 2023',
        image: 'blog_card.png'
    },
};

