import React, { ReactElement, memo, useCallback } from 'react';
import { Navigation } from '@devtools-ds/navigation';
import { DetailsTab } from '../types';
import './resourceDetailsTabs.scss';

interface Props<ResourceType> {
  resource: ResourceType;
  tabs: DetailsTab<ResourceType>[];
  close: () => void;
  onDetailsTabChange?: (tabKey: string) => void;
}

const ResourceDetailsTabs = <ResourceType,>({
  resource,
  tabs,
  close,
  onDetailsTabChange,
}: Props<ResourceType>): ReactElement => {
  const onTabNavigated = useCallback((tabIndex: number) => {
    onDetailsTabChange?.(tabs[tabIndex].key);
  }, []);

  return (
    <div className="rq-resource-details">
      {/* @ts-ignore */}
      <Navigation onChange={onTabNavigated}>
        <Navigation.Controls className="rq-resource-details-header">
          <Navigation.Left>
            <Navigation.Button
              icon={<span>&times;</span>}
              aria-label="Close"
              title="Close"
              onClick={close}
            />
          </Navigation.Left>
          <Navigation.TabList>
            {tabs.map((tab) => (
              <Navigation.Tab key={tab.key} className="rq-resource-details-tab" id={tab.key}>
                {tab.label}
              </Navigation.Tab>
            ))}
          </Navigation.TabList>
        </Navigation.Controls>
        <Navigation.Panels>
          {tabs.map((tab) => (
            <Navigation.Panel key={tab.key} className="rq-resource-details-content">
              {tab.render(resource)}
            </Navigation.Panel>
          ))}
        </Navigation.Panels>
      </Navigation>
    </div>
  );
};

export default memo(ResourceDetailsTabs);
