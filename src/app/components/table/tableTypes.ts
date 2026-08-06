export interface TableColumn<T> {
  id: string;
  header: string;
  accessor: (row: T) => unknown;
  width?: number;
}
