import type { Meta, StoryObj } from '@storybook/react';
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

export const NormalSideMenu: Story = {};
