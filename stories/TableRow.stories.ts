import type { Meta, StoryObj } from '@storybook/react';
import TableRow from "@/app/ui/molecules/TableRow.tsx";

const meta: Meta<typeof TableRow> = {
  title: 'UI Library/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Static: Story = {
  args: {
    row: {
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
  }
};

