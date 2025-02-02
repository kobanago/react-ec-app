import type { Meta, StoryObj } from '@storybook/react';
import goods from 'mocks/features/data/goods.json';
import { Cards } from '.';

const meta = {
  title: 'Molecules/Cards',
  component: Cards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalCards: Story = {
  args: {
    cards: goods.goods,
  },
};
