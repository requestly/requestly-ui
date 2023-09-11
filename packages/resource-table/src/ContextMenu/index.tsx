import React from 'react';
import { Dropdown, DropDownProps } from 'antd';
import './contextMenu.scss';

interface ContextMenuProps {
  children: React.ReactNode;
  items?: DropDownProps['menu']['items'];
  handleOpenChange?: DropDownProps['onOpenChange'];
}

export const ContextMenu = ({
  items,
  children,
  handleOpenChange = (isOpen) => {},
}: ContextMenuProps) => {
  return (
    <Dropdown
      menu={{ items }}
      autoFocus={true}
      trigger={['contextMenu']}
      destroyPopupOnHide={true}
      onOpenChange={handleOpenChange}
      disabled={!items || items?.length === 0}
      overlayClassName="rq-resource-table-context-menu"
    >
      {children}
    </Dropdown>
  );
};
