import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import CourseHeader from '@/app/ui/molecules/CourseHeader';

const meta: Meta<typeof CourseHeader> = {
  title: 'UI Library/Course header',
  component: CourseHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CourseHeader>;

export const Static: Story = {
  args: {
    title: 'Start the course header',
    image: '/banner-bg.png'
  },
};
