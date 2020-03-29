// src/app/my-grid-application/my-grid-application.component.ts
import { Component } from "@angular/core";
import { GridOptions } from "ag-grid";
import { RedComponentComponent } from "../red-component/red-component.component";
import { YellowComponentComponent } from "../yellow-component/yellow-component.component";
import { GreenComponentComponent } from "../green-component/green-component.component";
import { CasesService } from "../cases.service";

@Component({
  selector: "app-my-grid-application",
  templateUrl: "./my-grid-application.component.html"
})
export class MyGridApplicationComponent {
  private gridOptions: GridOptions;

  constructor(private cases:CasesService) {
    this.gridOptions = <GridOptions>{
      // enableSorting: true,
      // enableFilter: true,
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      }
    };
    this.gridOptions.columnDefs = [
      { headerName: "Country", field: "country" },
      { headerName: "Cases", field: "cases" },
      { headerName: "Todays Cases", field: "todayCases",cellRendererFramework: YellowComponentComponent, },
      { headerName: "Deaths", field: "deaths" },
      { headerName: "Todays Deaths", field: "todayDeaths", cellRendererFramework: RedComponentComponent },
      { headerName: "Recovered", field: "recovered", cellRendererFramework: GreenComponentComponent },
      { headerName: "Active", field: "active" },
      { headerName: "Critical", field: "critical" },
    ];

    // this.gridOptions.rowData = [];
    this.getRawData();
  }

  getRawData(){
    this.cases.getCases().subscribe(
      data => {
        this.gridOptions.api.setRowData(data);
      },
      error => {

      }
    );
  }
}
