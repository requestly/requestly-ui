import React, { ReactElement } from 'react';
import { BaseNetworkLog } from '../../../types';
import { Collapse } from 'antd';
import { NetworkLogProperty } from '../../NetworkLogProperty';
import { NetworkStatusField } from '../../NetworkStatusField';

const GeneralView = <T extends BaseNetworkLog>({ log }: { log: T }): ReactElement => {
  const networkEntry = log.entry;
  return (
    <Collapse defaultActiveKey={[0, 1, 2]}>
      <Collapse.Panel header="General" key={0}>
        <NetworkLogProperty label="Request URL">{networkEntry.request.url}</NetworkLogProperty>

        {!!networkEntry.response.redirectURL &&
        networkEntry.response.redirectURL !== networkEntry.request.url ? (
          <NetworkLogProperty label="Redirected URL">
            {networkEntry.response.redirectURL as string}
          </NetworkLogProperty>
        ) : null}

        <NetworkLogProperty label="Request Method">
          {networkEntry.request.method?.toUpperCase() ?? 'GET'}
        </NetworkLogProperty>

        <NetworkLogProperty label="Status Code">
          <NetworkStatusField
            status={networkEntry.response.status}
            statusText={(networkEntry.response?.statusText as string) ?? ''}
          />
        </NetworkLogProperty>
      </Collapse.Panel>

      {networkEntry.response.headers.length > 0 && (
        <Collapse.Panel header="Response Headers" key={1}>
          {networkEntry.response.headers.map(({ name, value }) => (
            <NetworkLogProperty key={name} label={name}>
              {value}
            </NetworkLogProperty>
          ))}
        </Collapse.Panel>
      )}

      {networkEntry.request.headers?.length > 0 && (
        <Collapse.Panel header="Request Headers" key={2}>
          {networkEntry.request.headers.map(({ name, value }) => (
            <NetworkLogProperty key={name} label={name}>
              {value}
            </NetworkLogProperty>
          ))}
        </Collapse.Panel>
      )}
    </Collapse>
  );
};

export default GeneralView;
