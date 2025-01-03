import React, { ReactElement } from 'react';

import { BaseNetworkLog } from '../../../types';
import { NetworkLogProperty } from '../../NetworkLogProperty';
import { NetworkPayload } from '../../NetworkPayload';

const ResponseView = <T extends BaseNetworkLog>({ log }: { log: T }): ReactElement => {
  const networkEntry = log.entry;
  const responseTimeInSeconds = networkEntry.time
    ? (((networkEntry.time as number) ?? 0) / 1000).toFixed(3)
    : null;

  return (
    <>
      {!!responseTimeInSeconds && (
        <NetworkLogProperty label="Response Time">{responseTimeInSeconds} sec</NetworkLogProperty>
      )}

      <NetworkPayload label="Body" payload={networkEntry.response.content.text} />
    </>
  );
};

export default ResponseView;
