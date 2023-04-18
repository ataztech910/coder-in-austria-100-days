import Header from '@/app/components/Header';
import type { Meta, StoryObj } from '@storybook/react';
import '@/app/globals.scss';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Header> = {
  title: 'UI Library/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};

export const E2E: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('hamburger'));

    await userEvent.hover(await within(canvasElement).getByText('Home'));
    await userEvent.hover(await within(canvasElement).getByText('Courses'));
    await userEvent.hover(await within(canvasElement).getByText('Blog'));

    await userEvent.click(canvas.getByPlaceholderText('search here...'));
    userEvent.keyboard('foo');

    await userEvent.click(canvas.getByTestId('searchButton'));

    await userEvent.hover(await within(canvasElement).getByText('EN'));
    await userEvent.hover(await within(canvasElement).getByText('Login'));

    await userEvent.click(canvas.getByTestId('signUp'));

  },
};