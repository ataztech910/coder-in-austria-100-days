import Footer from '@/app/components/Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Footer> = {
  title: 'UI Library/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Static: Story = {};

export const E2E: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.hover(await within(canvasElement).getByText('Home'));
    await userEvent.hover(await within(canvasElement).getByText('Courses'));
    await userEvent.hover(await within(canvasElement).getByText('Blog'));

    await userEvent.click(canvas.getByPlaceholderText('type your email here...'));
    userEvent.keyboard('foo');

    await userEvent.click(canvas.getByTestId('subscribe'));
  },
};
