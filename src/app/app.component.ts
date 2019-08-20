import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter-angular-aggrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  adaptableBlotterOptions: AdaptableBlotterOptions;

  constructor() {}
  ready(x: GridOptions) {
    this.adaptableBlotterOptions = {
      blotterId: '123',
      primaryKey: null,
      // userName: 'demo user',
      licenceKey: 'Trial',
      vendorGrid: x,
      containerOptions: {
        adaptableBlotterContainer: 'adaptableBlotter'
      },
      generalOptions: {
        showMissingPrimaryKeyWarning: false
      },
      filterOptions: {
        useAdaptableBlotterFilterForm: false
      }
    };
  }
}
