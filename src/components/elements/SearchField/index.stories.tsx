import store from '@/stores';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
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

const MockStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const NormalSearchField: Story = {
  decorators: [(story: () => ReactNode) => <MockStore>{story()}</MockStore>],
};
