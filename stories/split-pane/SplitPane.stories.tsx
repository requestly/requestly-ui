import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SplitPane } from '@requestly-ui/split-pane';
import './styles.css';

type Story = StoryObj<typeof SplitPane>;

const meta: Meta<typeof SplitPane> = {
  title: 'SplitPane',
  component: SplitPane,
};

export default meta;

export const Primary: Story = {
  render: () => (
    <SplitPane>
      <div className="left">Left</div>
      <div className="right">Right</div>
    </SplitPane>
  ),
};
