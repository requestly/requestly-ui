import React, { CSSProperties, ReactElement, memo, useMemo } from 'react';
import { Table } from '@devtools-ds/table';
import { Column } from './types';

interface Props<ResourceType> {
  id: string;
  resource: ResourceType;
  columns: Column<ResourceType>[];
  isFailed?: (resource: ResourceType) => boolean;
  setContextMenuSelectedResource: (resource: ResourceType) => void;
  rowStyle?: ((log: ResourceType) => CSSProperties) | CSSProperties;
  rowAttributes?: ((log: ResourceType) => object) | object;
}

const ResourceTableRow = <ResourceType,>({
  id,
  resource,
  columns,
  isFailed,
  setContextMenuSelectedResource,
  rowStyle = {},
  rowAttributes = {},
}: Props<ResourceType>): ReactElement => {
  const failed = useMemo(() => isFailed?.(resource), [resource]);
  const attributes = typeof rowAttributes === 'object' ? rowAttributes : rowAttributes(resource);

  return (
    <Table.Row
      id={id}
      onContextMenu={() => setContextMenuSelectedResource(resource)}
      className={`rq-resource-table-row ${failed ? 'failed' : ''}`}
      style={typeof rowStyle === 'object' ? rowStyle : rowStyle?.(resource)}
      {...attributes}
    >
      {columns.map((column) => (
        <Table.Cell key={column.key}>{column.render(resource)}</Table.Cell>
      ))}
    </Table.Row>
  );
};

export default memo(ResourceTableRow);
