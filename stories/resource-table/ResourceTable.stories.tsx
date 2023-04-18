import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResourceTable } from '@requestly-ui/resource-table';
import persons from './persons';
import columns from './columns';
import './styles.css';

type Story = StoryObj<typeof ResourceTable>;

const meta: Meta<typeof ResourceTable> = {
  title: 'ResourceTable',
  component: ResourceTable,
};

export default meta;

export const Primary: Story = {
  render: () => (
    <ResourceTable resources={persons} columns={columns} />
  )
};
