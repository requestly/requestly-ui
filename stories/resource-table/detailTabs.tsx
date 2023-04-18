import React from 'react';
import { DetailsTab, PropertyRow } from '@requestly-ui/resource-table';
import { Person } from './types';

const detailTabs: DetailsTab<Person>[] = [
  {
    key: 'personal',
    label: 'Personal',
    render: (person: Person) => (
      <div className="person-details-tab-content">
        <PropertyRow name="Email" value={person.email} />
        <PropertyRow name="Phone no" value={person.phone} />
      </div>
    ),
  },
  {
    key: 'work',
    label: 'Work',
    render: (person: Person) => (
      <div className="person-details-tab-content">
        <PropertyRow name="Company" value={person.company} />
        <PropertyRow name="Designation" value={person.designation} />
      </div>
    ),
  },
];

export default detailTabs;
