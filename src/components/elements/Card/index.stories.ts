import type { Meta, StoryObj } from '@storybook/react';
import goods from 'mocks/features/data/goods.json';
import { Card } from '.';

const meta = {
  title: 'Elements/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalCard: Story = {
  args: {
    item: goods.goods[0],
  },
};
