import { TextField } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'outlined',
    children: 'TextField',
    color: 'primary'
  }
};
