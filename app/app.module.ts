import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyGridApplicationComponent } from "./my-grid-application/my-grid-application.component";
import { RedComponentComponent } from "./red-component/red-component.component";
import { GreenComponentComponent } from "./green-component/green-component.component";
import { YellowComponentComponent } from "./yellow-component/yellow-component.component";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CasesService } from "./cases.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([
      RedComponentComponent,
      GreenComponentComponent,
      YellowComponentComponent
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MyGridApplicationComponent,
    RedComponentComponent,
    GreenComponentComponent,
    YellowComponentComponent
  ],
  providers: [CasesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
