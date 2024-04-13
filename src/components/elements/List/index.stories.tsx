import { MY_MENU } from '@/const';
import store from '@/stores';
import type { Meta, StoryObj } from '@storybook/react';
import { goods } from 'mocks/features/data/goods.json';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { List } from '.';

const meta = {
  title: 'Elements/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const GoodsList: Story = {
  args: { list: goods },
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};

export const MenuList: Story = {
  args: { list: MY_MENU },
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};

export const ListNoItem: Story = {
  args: { list: [] },
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};
