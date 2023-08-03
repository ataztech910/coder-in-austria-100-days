import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import BlogArticleList from '@/app/ui/molecules/BlogArticleList';

const meta: Meta<typeof BlogArticleList> = {
  title: 'UI Library/Blog article list',
  component: BlogArticleList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogArticleList>;

export const Static: Story = {
  args: 
    {
      items:[
        {
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
        {
          tag: {
            color: 'red',
            isSmall: false,
            title: 'JS'
          },
          title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
          text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
          date: 'Dec 06, 2023',
          url: '/blog/1235',
          image: 'blog_card.png'
        },
        {
          tag: {
            color: 'red',
            isSmall: false,
            title: 'JS'
          },
          title: 'Lorem ipsum Lorem ipsum Lorem ipsum ',
          text: 'The unconventional guide to unique dresses. Cheap cloths by the numbers. The evolution of fashion magazines. 18 things your boss expects you ',
          date: 'Dec 06, 2023',
          url: '/blog/1234',
          image: 'blog_card.png'
        }
      ]
    },
};

