import { Entry } from 'har-format';
import { Column as ResourceTableColumn } from '@requestly-ui/resource-table';

export type HarEntry = Entry;

export type NetworkEntry = HarEntry; // Add more in future. WSEntry || GRPCEntry

export interface BaseNetworkLog {
  id: string;
  entry: NetworkEntry;
}

export type Column<T> = ResourceTableColumn<T>;
