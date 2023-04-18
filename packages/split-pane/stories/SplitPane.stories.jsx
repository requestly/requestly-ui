import React from 'react';
import { SplitPane } from '@requestly-ui/split-pane';
import './styles.css';

export default {
  title: 'SplitPane',
  component: SplitPane,
};

export const Primary = {
  render: () => (
    <SplitPane>
      <div className="left">Left</div>
      <div className="right">Right</div>
    </SplitPane>
  )
};
