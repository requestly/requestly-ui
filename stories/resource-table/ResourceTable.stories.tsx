import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { ColorScheme, ResourceTable } from '@requestly-ui/resource-table';
import persons from './persons';
import columns from './columns';
import detailTabs from './detailTabs';
import './styles.css';
import { Person } from './types';

type Story = StoryObj<typeof ResourceTable>;

const meta: Meta<typeof ResourceTable> = {
  title: 'ResourceTable',
  component: ResourceTable,
};

export default meta;

export const Primary: Story = {
  render: () => {
    const [companyFilter, setCompanyFilter] = useState('');

    return (
      <>
        <div className="filter-toolbar">
          <label htmlFor="company-filter">Company</label>
          <input
            id="company-filter"
            value={companyFilter}
            onChange={(evt) => setCompanyFilter(evt.target.value)}
          />
        </div>
        <ResourceTable
          colorScheme={useDarkMode() ? ColorScheme.DARK : ColorScheme.LIGHT}
          resources={persons}
          columns={columns}
          detailsTabs={detailTabs}
          primaryColumnKeys={[columns[0].key]}
          filter={(person: Person) =>
            person.company.toLowerCase().includes(companyFilter.toLowerCase())
          }
        />
      </>
    );
  },
};
