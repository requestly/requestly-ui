import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NetworkTable } from '@requestly-ui/network-table';
import logs from './logs';

type Story = StoryObj<typeof NetworkTable>;

const meta: Meta<typeof NetworkTable> = {
  title: 'NetworkTable',
  component: NetworkTable,
};

export default meta;

export const Default: Story = {
  render: () => {
    return <NetworkTable logs={logs} />;
  },
};
