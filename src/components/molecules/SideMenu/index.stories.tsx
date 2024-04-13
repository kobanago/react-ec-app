import store from '@/stores';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { SideMenu } from '.';

const meta = {
  title: 'Molecules/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const NormalSideMenu: Story = {
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};
