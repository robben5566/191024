import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [HomeComponent, PagesComponent],
  imports: [PagesRoutingModule, SharedModule]
})
export class PagesModule {}
