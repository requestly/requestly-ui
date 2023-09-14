import React, { useCallback, useMemo } from 'react';
import { Dropdown, DropDownProps } from 'antd';
import { ContextMenuOption } from '../types';
import './contextMenu.scss';

interface ContextMenuProps<ResourceType> {
  children: React.ReactNode;
  items?: DropDownProps['menu']['items'];
  handleOpenChange?: DropDownProps['onOpenChange'];
  selectedResource: ResourceType | null;
}

export const ContextMenu = <ResourceType,>({
  items = [],
  children,
  selectedResource,
  handleOpenChange = (isOpen) => {},
}: ContextMenuProps<ResourceType>) => {
  if (!items || items?.length === 0) {
    return <>{children}</>;
  }

  const sanitizeContextMenuItems = useCallback(
    <ResourceType,>(options: ContextMenuOption<ResourceType>[]): DropDownProps['menu']['items'] => {
      const updatedOptions = [];

      for (let i = 0; i < options.length; i++) {
        if (options[i].children) {
          updatedOptions.push({
            ...options[i],
            // @ts-ignore
            children: sanitizeContextMenuItems(options[i].children),
          });
        } else if (options[i].onSelect) {
          updatedOptions.push({
            ...options[i],
            onClick: (menuInfo: unknown) => {
              // @ts-ignore
              options[i].onSelect(menuInfo.key, selectedResource);
            },
          });
        } else {
          updatedOptions.push(options[i]);
        }
      }

      return updatedOptions;
    },
    [selectedResource],
  );

  const updatedItems = useMemo(
    () => sanitizeContextMenuItems(items),
    [items, sanitizeContextMenuItems],
  );

  return (
    <Dropdown
      menu={{ items: updatedItems }}
      autoFocus={true}
      trigger={['contextMenu']}
      destroyPopupOnHide={true}
      onOpenChange={handleOpenChange}
      overlayClassName="rq-resource-table-context-menu"
    >
      {children}
    </Dropdown>
  );
};
