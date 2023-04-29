import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import BreadCrumbs from '@/app/ui/atoms/BreadCrumbs';

const meta: Meta<typeof BreadCrumbs> = {
  title: 'UI Library/Breadcrumbs',
  component: BreadCrumbs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BreadCrumbs>;

export const Static: Story = {
    args: {
      items: [
          {
            title: 'Home',
            isLast: false,
            url: '/'
          },
          {
            title: 'Blog',
            isLast: true
          }
        ]
    },
};

