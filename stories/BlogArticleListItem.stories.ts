import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import BlogArticleListItem from '@/app/ui/molecules/BlogArticleListItem';

const meta: Meta<typeof BlogArticleListItem> = {
  title: 'UI Library/Blog article list item',
  component: BlogArticleListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogArticleListItem>;

export const Static: Story = {
    args: {
        tag: {
            color: 'red',
            isSmall: false,
            title: 'JS'
        },
        title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
        text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
        date: 'Dec 06, 2023',
        url: '/blog/123',
        image: 'blog_card.png'
    },
};

