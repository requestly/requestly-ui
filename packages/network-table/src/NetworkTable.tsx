import React, { ReactElement, useCallback, useMemo } from 'react';
import { ResourceTable, ResourceTableProps } from '@requestly-ui/resource-table';

import { BaseNetworkLog } from './types';
import { DefaultColumnKey, getDefaultColumns } from './components/columns';
import { getDefaultDetailsTabs } from './components/detailsTabs';
import './NetworkTable.scss';

export interface NetworkTableProps<T> {
  logs: T[];

  /** UI and Enhancement */
  primaryColumnKeys?: ResourceTableProps<T>['primaryColumnKeys'];
  isFailed?: ResourceTableProps<T>['isFailed'];

  /** Actions */
  onRowSelection?: ResourceTableProps<T>['onRowSelection'];
}

const NetworkTable = <NetworkLog extends BaseNetworkLog>({
  logs,

  /** UI and Enhancement */
  primaryColumnKeys = [DefaultColumnKey.startedDateTime, DefaultColumnKey.url],

  /** Actions */
  onRowSelection,
}: NetworkTableProps<NetworkLog>): ReactElement => {
  const finalColumns = useMemo(() => [...getDefaultColumns()], []);
  const finalDetailsTabs = useMemo(() => [...getDefaultDetailsTabs()], []);

  const isFailed = useCallback((log: NetworkLog) => {
    const harEntry = log.entry;
    const { status } = harEntry.response;
    return !status || status >= 400;
  }, []);

  const handleRowClick = useCallback(
    (log: NetworkLog) => {
      onRowSelection?.(log);
    },
    [onRowSelection],
  );

  return (
    <div className="rq-resource-table-wrapper">
      <ResourceTable
        // Required
        resources={logs}
        columns={finalColumns}
        detailsTabs={finalDetailsTabs}
        // UI and Enhancement
        primaryColumnKeys={primaryColumnKeys}
        isFailed={isFailed}
        // Actions
        onRowSelection={handleRowClick}

        // colorScheme={ColorScheme.DARK}
        // contextMenuOptions={contextMenuOptions}
        // filter={filterLog}
        // emptyView={emptyView}
        // rowStyle={rowStyle}
        // autoScroll={autoScroll}
        // tableRef={tableRef}
        // onTableScroll={onTableScroll}
      />
    </div>
  );
};

export default NetworkTable;
