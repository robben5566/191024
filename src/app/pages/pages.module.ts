import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "@shared/shared.module";

import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [HomeComponent, PagesComponent],
  imports: [PagesRoutingModule, SharedModule]
})
export class PagesModule {}
