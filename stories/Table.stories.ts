import type { Meta, StoryObj } from '@storybook/react';
import Table from "@/app/ui/organisms/Table.tsx";

const meta: Meta<typeof Table> = {
  title: 'UI Library/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Static: Story = {
  args: {
    table: [
      {
        name: 'Basics Informatics',
        modules: [
          {
            name: 'Course introduction',
            progress: 10
          },
          {
            name: 'Course introduction2',
            progress: 20
          },
          {
            name: 'Course introduction3',
            progress: 50
          }
        ]
      },
      {
        name: 'Basics Informatics',
        modules: [
          {
            name: 'Course introduction',
            progress: 10
          },
          {
            name: 'Course introduction2',
            progress: 20
          },
          {
            name: 'Course introduction3',
            progress: 50
          }
        ]
      },
      {
        name: 'Basics Informatics',
        modules: [
          {
            name: 'Course introduction',
            progress: 10
          },
          {
            name: 'Course introduction2',
            progress: 20
          },
          {
            name: 'Course introduction3',
            progress: 50
          }
        ]
      }
    ]
  }
};

