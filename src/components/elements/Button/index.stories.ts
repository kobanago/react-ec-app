import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    clickHandler: action('click'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalButton: Story = {
  args: {
    label: 'Button',
  },
};
export const IconButton: Story = {
  args: {
    iconClass: 'i-material-symbols-person w-7 h-7',
  },
};
export const IconLabelButton: Story = {
  args: {
    iconClass: 'i-material-symbols-person animate-bounce w-7 h-7',
    label: 'Button',
  },
};
