import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter-angular-aggrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridOptions: GridOptions = {
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ],
    columnDefs: [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ]
  };

  adaptableBlotterOptions: AdaptableBlotterOptions = {
    blotterId: '1234561',
    primaryKey: 'make',

    vendorGrid: this.gridOptions,

    generalOptions: {
      showMissingPrimaryKeyWarning: false
    },
    filterOptions: {
      useAdaptableBlotterFilterForm: false
    }
  };

  constructor() {}
  ready(x: GridOptions) {}
}
