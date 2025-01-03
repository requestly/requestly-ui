import React, { ReactElement } from 'react';
import { BaseNetworkLog } from '../../../types';
import { Collapse } from 'antd';
import { NetworkLogProperty } from '../../NetworkLogProperty';
import { NetworkPayload } from '../../NetworkPayload';

const RequestPayloadView = <T extends BaseNetworkLog>({ log }: { log: T }): ReactElement => {
  const networkEntry = log.entry;

  return (
    <Collapse defaultActiveKey={[0, 1]}>
      {networkEntry.request.queryString.length > 0 && (
        <Collapse.Panel header="Query String" key={0}>
          {networkEntry.request.queryString.map(({ name, value }) => (
            <NetworkLogProperty key={name} label={name}>
              {value}
            </NetworkLogProperty>
          ))}
        </Collapse.Panel>
      )}
      {networkEntry.request.postData && networkEntry.request.postData.text && (
        <Collapse.Panel header="Request Payload" key={1}>
          <NetworkPayload payload={networkEntry.request.postData.text} />
        </Collapse.Panel>
      )}
    </Collapse>
  );
};

export default RequestPayloadView;
