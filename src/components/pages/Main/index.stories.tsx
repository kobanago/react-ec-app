import store from '@/stores';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Main } from '.';

const meta = {
  title: 'Pages/Main',
  component: Main,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

const MockStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const NormalMain: Story = {
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};
