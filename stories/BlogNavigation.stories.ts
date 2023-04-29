import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import BlogNavigation from '@/app/ui/molecules/BlogNavigation';

const meta: Meta<typeof BlogNavigation> = {
  title: 'UI Library/Blog navigation',
  component: BlogNavigation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogNavigation>;

export const Static: Story = {
    args: {
      popularBlogs: [
        {
            image: '/popular_blog.png',
            title: 'If you read one article about summer outfits read this one',
            date: 'Dec 06, 2016',
            url: '/blog/123',
            id: '123'
        },
        {
            image: '/popular_blog.png',
            title: 'If you read one article about summer outfits read this one',
            date: 'Dec 06, 2016',
            url: '/blog/123',
            id: '1234'
        },
        {
            image: '/popular_blog.png',
            title: 'If you read one article about summer outfits read this one',
            date: 'Dec 06, 2016',
            url: '/blog/123',
            id: '1235'
        }
      ],
      categories: [
        {
          title: 'Programming',
          url: 'blog/category/programming'
        },
        {
          title: 'Traveling',
          url: 'blog/category/traveling'
        },
        {
          title: 'Lifestyle',
          url: 'blog/category/lifestyle'
        }
      ],
      tags: [
        {
          title: 'JS',
          url: '/blog/tags/JS',
          color: 'red',
          isSmall: true
        },
        {
          title: 'MongoDB',
          url: '/blog/tags/MongoDB',
          color: 'middleBlue',
          isSmall: true
        },
        {
          title: 'ReactJS',
          url: '/blog/tags/ReactJS',
          color: 'darkBlue',
          isSmall: true
        }
      ]
    },
};

