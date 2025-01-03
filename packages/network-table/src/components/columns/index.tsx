import React from 'react';
import { BaseNetworkLog, Column } from '../../types';

export enum DefaultColumnKey {
  startedDateTime = 'startedDateTime',
  url = 'url',
  method = 'method',
  contentType = 'contentType',
  status = 'status',
  time = 'time',
}

const DEFAULT_COLUMNS: Record<DefaultColumnKey, Column<BaseNetworkLog>> = {
  [DefaultColumnKey.startedDateTime]: {
    key: DefaultColumnKey.startedDateTime,
    header: 'Time',
    width: 5,
    render: (log) => log.entry.startedDateTime,
  },
  [DefaultColumnKey.url]: {
    key: DefaultColumnKey.url,
    header: 'URL',
    width: 50,
    render: (log) => log.entry.request.url,
  },
  [DefaultColumnKey.method]: {
    key: DefaultColumnKey.method,
    header: 'Method',
    width: 8,
    render: (log) => {
      const method = log.entry.request.method;
      return <div>{method}</div>;
    },
  },
  [DefaultColumnKey.contentType]: {
    key: DefaultColumnKey.contentType,
    header: 'Content-Type',
    width: 15,
    render: (log) => log.entry.response.content.mimeType,
  },
  [DefaultColumnKey.status]: {
    key: DefaultColumnKey.status,
    header: 'Status',
    width: 6,
    render: (log) => log.entry.response.status,
  },
  [DefaultColumnKey.time]: {
    key: DefaultColumnKey.time,
    header: 'Time',
    width: 6,
    render: (log) => `${log.entry.time} ms`,
  },
};

export const getDefaultColumns = <NetworkLog extends BaseNetworkLog>(): Column<NetworkLog>[] => {
  return Object.values(DEFAULT_COLUMNS);
};
