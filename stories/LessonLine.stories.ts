import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import LessonLine from '@/app/ui/molecules/LessonLine';

const meta: Meta<typeof LessonLine> = {
  title: 'UI Library/Lesson Line',
  component: LessonLine,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LessonLine>;

export const Static: Story = {
  args: {
    title: 'Start the course header',
    status: false,
    link: '#',
    icon: true,
  },
};
