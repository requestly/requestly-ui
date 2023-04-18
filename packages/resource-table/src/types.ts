import { ReactNode } from 'react';

export enum ColorScheme {
  LIGHT = "light",
  DARK = "dark",
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
