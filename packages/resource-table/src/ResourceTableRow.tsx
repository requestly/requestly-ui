import React, { ReactElement, memo, useMemo } from "react";
import { Table } from "@devtools-ds/table";
import { Column } from "./types";

interface Props<ResourceType> {
  id: string;
  resource: ResourceType;
  columns: Column<ResourceType>[];
  isFailed?: (resource: ResourceType) => boolean;
  setContextMenuSelectedResource: (resource: ResourceType) => void;
  rowClassName?: (log: ResourceType) => string | string;
}

const ResourceTableRow = <ResourceType,>({
  id,
  resource,
  columns,
  isFailed,
  setContextMenuSelectedResource,
  rowClassName,
}: Props<ResourceType>): ReactElement => {
  const failed = useMemo(() => isFailed?.(resource), [resource]);

  return (
    <Table.Row
      id={id}
      onContextMenu={() => setContextMenuSelectedResource(resource)}
      className={`rq-resource-table-row ${failed ? "failed" : ""} ${
        typeof rowClassName === "string" ? rowClassName : rowClassName?.(resource)
      }`}
    >
      {columns.map((column) => (
        <Table.Cell key={column.key}>{column.render(resource)}</Table.Cell>
      ))}
    </Table.Row>
  );
};

export default memo(ResourceTableRow);
