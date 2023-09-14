import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { SplitPane } from '@requestly-ui/split-pane';
import { ThemeProvider } from '@devtools-ds/themes';
import { Table } from '@devtools-ds/table';
import useAutoScrollableContainer from './useAutoScrollableContainer';
import ResourceDetailsTabs from './ResourceDetailsTabs/ResourceDetailsTabs';
import ResourceTableRow from './ResourceTableRow';
import { DropDownProps } from 'antd';
import { ColorScheme, Column, ContextMenuOption, DetailsTab } from './types';
import { ContextMenu } from './ContextMenu';
import './resourceTable.scss';

export interface ResourceTableProps<ResourceType> {
  colorScheme?: ColorScheme;
  resources: ResourceType[];
  columns: Column<ResourceType>[];
  filter?: (resource: ResourceType) => boolean;

  /** Columns to show when details panel is opened (split pane) */
  primaryColumnKeys?: string[];

  /** Multiple tabs to show in details panel for a resource */
  detailsTabs?: DetailsTab<ResourceType>[];

  /** If returns true, the row will be marked failed */
  isFailed?: (resource: ResourceType) => boolean;

  /** Feedback on row selection */
  onRowSelection?: (resource: ResourceType) => void;

  /** Feedback on details tab selection */
  onDetailsTabChange?: (tabKey: string) => void;

  /** Feedback on context menu open */
  onContextMenuOpenChange?: (isOpen: boolean) => void;

  contextMenuOptions?: ContextMenuOption<ResourceType>[];
}

const ROW_ID_PREFIX = 'resource-'; // TODO: move to local state
const getRowId = (index: number): string => (index >= 0 ? `${ROW_ID_PREFIX}${index}` : '');
const getRowIndex = (id: string): number =>
  id ? parseInt(id.substring(ROW_ID_PREFIX.length)) : undefined;

const ResourceTable = <ResourceType,>({
  colorScheme = ColorScheme.DARK,
  columns,
  resources,
  primaryColumnKeys,
  detailsTabs,
  filter,
  isFailed,
  onRowSelection,
  onDetailsTabChange,
  onContextMenuOpenChange,
  contextMenuOptions = [],
}: ResourceTableProps<ResourceType>): ReactElement => {
  const [selectedRowId, setSelectedRowId] = useState('');
  const [contextMenuSelectedResource, setContextMenuSelectedResource] =
    useState<ResourceType>(null);
  const [scrollableContainerRef, onScroll] = useAutoScrollableContainer<HTMLDivElement>(resources);

  const selectedResource = useMemo<ResourceType>(() => {
    if (!selectedRowId) {
      return null;
    }

    const selectedRowIndex = getRowIndex(selectedRowId);
    return resources[selectedRowIndex];
  }, [selectedRowId]);

  const columnsToRender = useMemo<Column<ResourceType>[]>(() => {
    if (selectedResource && detailsTabs) {
      if (primaryColumnKeys) {
        return columns.filter((column) => primaryColumnKeys.includes(column.key));
      }
    }
    return columns;
  }, [selectedResource, detailsTabs, primaryColumnKeys]);

  const sanitizeContextMenuOptions = useCallback(
    <ResourceType,>(options: ContextMenuOption<ResourceType>[]): DropDownProps['menu']['items'] => {
      const updatedOptions = [];

      for (let i = 0; i < options.length; i++) {
        if (options[i].children) {
          updatedOptions.push({
            ...options[i],
            // @ts-ignore
            children: sanitizeContextMenuOptions(options[i].children),
          });
        } else if (options[i].onSelect) {
          updatedOptions.push({
            ...options[i],
            onClick: (menuInfo: unknown) => {
              // @ts-ignore
              options[i].onSelect(menuInfo.key, contextMenuSelectedResource);
            },
          });
        } else {
          updatedOptions.push(options[i]);
        }
      }

      return updatedOptions;
    },
    [contextMenuSelectedResource],
  );

  const updatedContextMenuOptions = useMemo(
    () => sanitizeContextMenuOptions(contextMenuOptions),
    [contextMenuOptions, sanitizeContextMenuOptions],
  );

  useEffect(() => {
    if (selectedResource) {
      onRowSelection?.(selectedResource);
    }
  }, [selectedResource]);

  return (
    <ThemeProvider theme={'chrome'} colorScheme={colorScheme}>
      <div className="rq-resource-table-container" data-scheme={colorScheme}>
        <SplitPane className="rq-resource-table-splitpane">
          <div onScroll={onScroll} ref={scrollableContainerRef}>
            <Table
              className="rq-resource-table"
              selected={selectedRowId}
              onSelected={setSelectedRowId}
            >
              <Table.Head>
                <Table.Row>
                  {columnsToRender.map((column) => (
                    <Table.HeadCell
                      key={column.key}
                      style={{ width: column.width ? `${column.width}%` : 'auto' }}
                    >
                      {column.header}
                    </Table.HeadCell>
                  ))}
                </Table.Row>
              </Table.Head>
              <ContextMenu
                items={updatedContextMenuOptions}
                handleOpenChange={onContextMenuOpenChange}
              >
                <Table.Body>
                  {resources.map((resource, index) =>
                    !filter || filter(resource) ? (
                      <ResourceTableRow
                        key={index}
                        id={getRowId(index)}
                        resource={resource}
                        columns={columnsToRender}
                        isFailed={isFailed}
                        setContextMenuSelectedResource={setContextMenuSelectedResource}
                      />
                    ) : null,
                  )}
                </Table.Body>
              </ContextMenu>
            </Table>
          </div>
          {selectedResource && detailsTabs ? (
            <ResourceDetailsTabs
              resource={selectedResource}
              tabs={detailsTabs}
              close={() => setSelectedRowId('')}
              onDetailsTabChange={onDetailsTabChange}
            />
          ) : null}
        </SplitPane>
      </div>
    </ThemeProvider>
  );
};

export default ResourceTable;
