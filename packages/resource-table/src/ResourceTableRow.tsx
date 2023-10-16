import React, { CSSProperties, ReactElement, memo, useMemo } from "react";
import { Table } from "@devtools-ds/table";
import { Column } from "./types";

interface Props<ResourceType> {
  id: string;
  resource: ResourceType;
  columns: Column<ResourceType>[];
  isFailed?: (resource: ResourceType) => boolean;
  setContextMenuSelectedResource: (resource: ResourceType) => void;
  rowStyle?: ((log: ResourceType) => CSSProperties) | CSSProperties;
}

const ResourceTableRow = <ResourceType,>({
  id,
  resource,
  columns,
  isFailed,
  setContextMenuSelectedResource,
  rowStyle = {},
}: Props<ResourceType>): ReactElement => {
  const failed = useMemo(() => isFailed?.(resource), [resource]);

  return (
    <Table.Row
      id={id}
      //@ts-ignore
      data-resource-id={resource?.id ?? null}
      onContextMenu={() => setContextMenuSelectedResource(resource)}
      className={`rq-resource-table-row ${failed ? "failed" : ""}`}
      style={typeof rowStyle === "object" ? rowStyle : rowStyle?.(resource)}
    >
      {columns.map((column) => (
        <Table.Cell key={column.key}>{column.render(resource)}</Table.Cell>
      ))}
    </Table.Row>
  );
};

export default memo(ResourceTableRow);
