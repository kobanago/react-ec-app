import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMenu } from '.';

const meta = {
  title: 'Elements/HeaderMenu',
  component: HeaderMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    handleClickDisplayMenu: action('click'),
  },
} satisfies Meta<typeof HeaderMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalHeaderMenu: Story = {
  args: {
    // options: ['Option 1', 'Option 2', 'Option 3'],
  },
};
