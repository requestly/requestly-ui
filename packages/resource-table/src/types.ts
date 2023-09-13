import React, { ReactNode } from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

export enum ColorScheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Column<ResourceType> {
  key: string;
  header: string;
  width?: number; // percentage
  render: (resource: ResourceType) => ReactNode;
}

export interface DetailsTab<ResourceType> {
  key: string;
  label: string;
  render: (resource: ResourceType) => ReactNode;
}

export type ContextMenuOption<ResourceType> = ItemType & {
  onSelect?: (key: React.Key, resource: ResourceType) => void;
  children?: ContextMenuOption<ResourceType>[];
};
