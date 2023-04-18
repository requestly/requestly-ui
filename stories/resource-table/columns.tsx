import { Column } from '@requestly-ui/resource-table';
import { Person } from './types';

const columns: Column<Person>[] = [
  {
    key: 'name',
    header: 'Name',
    render: (person: Person) => person.name,
  },
  {
    key: 'email',
    header: 'Email',
    render: (person: Person) => person.email,
  },
  {
    key: 'phone',
    header: 'Phone',
    render: (person: Person) => person.phone,
  },
  {
    key: 'company',
    header: 'Company',
    render: (person: Person) => person.company,
  },
  {
    key: 'designation',
    header: 'Designation',
    render: (person: Person) => person.designation,
  },
];

export default columns;
