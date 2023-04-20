import FindYourMentor from '@/app/ui/molecules/FindYourMentor';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof FindYourMentor> = {
  title: 'UI Library/Find Your Mentor',
  component: FindYourMentor,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FindYourMentor>;

export const Static: Story = {};
