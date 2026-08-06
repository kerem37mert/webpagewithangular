import {Component} from '@angular/core';
import {Table} from '../../components';
import {dataModel} from './dataModel';
import {TableColumn} from '../../components/table/tableTypes';
import {exampleData, ExampleDataType} from './exampleData';

@Component({
  selector: 'app-contact',
  templateUrl: `./contact.html`,
  styleUrls: ['./contact.scss'],
  imports: [
    Table
  ]
})

export class Contact {
  name = "kerem";
  columns: TableColumn<ExampleDataType>[] = dataModel;
  data: ExampleDataType[] = exampleData;
}
