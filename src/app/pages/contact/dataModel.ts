import { TableColumn } from '../../components/table/tableTypes';
import {ExampleDataType} from './exampleData';

export const dataModel: TableColumn<ExampleDataType>[] = [
  {
    id: "id",
    header: "id",
    accessor: (row) => row.id,
    width: 120,
  },
  {
    id: "name",
    header: "name",
    accessor: (row) => row.name.firstName,
    width: 120,
  },
  {
    id: "age",
    header: "age",
    accessor: (row) => row.age,
    width: 120,
  },
];
