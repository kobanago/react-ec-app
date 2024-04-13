import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchField } from '.';

const meta = {
  title: 'Elements/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    clickHandler: action('click'),
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalSearchField: Story = {};
