import React from 'react';
import { DetailsTab } from '@requestly-ui/resource-table';

import { BaseNetworkLog } from '../../types';
import GeneralView from './views/GeneralView';
import RequestPayloadView from './views/RequestPayloadView';
import ResponseView from './views/ResponseView';

export enum DefaultDetailsTabKey {
  Headers = 'headers',
  Payload = 'payload',
  Response = 'response',
}

// TODO: Move Each Tab to a separate file as they can get huge

const DEFAULT_DETAILS_TABS: Record<DefaultDetailsTabKey, DetailsTab<BaseNetworkLog>> = {
  [DefaultDetailsTabKey.Headers]: {
    key: 'headers',
    label: 'Headers',
    render: (log) => <GeneralView log={log} />,
  },
  [DefaultDetailsTabKey.Payload]: {
    key: 'payload',
    label: 'Payload',
    render: (log) => <RequestPayloadView log={log} />,
  },
  [DefaultDetailsTabKey.Response]: {
    key: 'response',
    label: 'Response',
    render: (log) => <ResponseView log={log} />,
  },
};

export const getDefaultDetailsTabs = <
  NetworkLog extends BaseNetworkLog,
>(): DetailsTab<NetworkLog>[] => {
  return Object.values(DEFAULT_DETAILS_TABS);
};
