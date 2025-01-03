// TODO: Export from base module
import { NetworkEntry } from '@requestly-ui/network-table/dist/types';
import { BaseNetworkLog } from '@requestly-ui/network-table/src/types';

export interface NetworkLog extends BaseNetworkLog {
  id: string;
  entry: NetworkEntry;
}
