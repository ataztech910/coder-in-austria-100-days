import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import LessonModule from '@/app/ui/organisms/LessonsModule';

const meta: Meta<typeof LessonModule> = {
  title: 'UI Library/Lesson Module',
  component: LessonModule,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LessonModule>;

export const Static: Story = {
  args: {
    title: 'Lessons module',
    lessons: [
        {
            title: 'Start the course header',
            status: false,
            link: '#',
            icon: true,
        },
        {
            title: 'Start the course header',
            status: false,
            link: '#',
            icon: true,
        }
    ]
  },
};
