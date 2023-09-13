import React from 'react';
import { Dropdown, DropDownProps } from 'antd';
import './contextMenu.scss';

interface ContextMenuProps {
  children: React.ReactNode;
  items?: DropDownProps['menu']['items'];
  handleOpenChange?: DropDownProps['onOpenChange'];
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  items,
  children,
  handleOpenChange = (isOpen) => {},
}) => {
  return items?.length > 0 ? (
    <Dropdown
      menu={{ items }}
      autoFocus={true}
      trigger={['contextMenu']}
      destroyPopupOnHide={true}
      onOpenChange={handleOpenChange}
      overlayClassName="rq-resource-table-context-menu"
    >
      {children}
    </Dropdown>
  ) : (
    <>{children}</>
  );
};
