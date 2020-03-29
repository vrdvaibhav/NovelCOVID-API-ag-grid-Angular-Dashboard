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
      enableSorting: true,
      enableFilter: true
    };
    this.gridOptions.columnDefs = [
      { headerName: "Country", field: "country", width: 100 },
      { headerName: "Cases", field: "cases", width: 100 },
      { headerName: "Todays Cases", field: "todayCases", width: 100,cellRendererFramework: YellowComponentComponent, },
      { headerName: "Deaths", field: "deaths", width: 100 },
      { headerName: "Todays Deaths", field: "todayDeaths", cellRendererFramework: RedComponentComponent, width: 100 },
      { headerName: "Recovered", field: "recovered", cellRendererFramework: GreenComponentComponent, width: 100 },
      { headerName: "Active", field: "active", width: 100 },
      { headerName: "Critical", field: "critical", width: 100 },
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
