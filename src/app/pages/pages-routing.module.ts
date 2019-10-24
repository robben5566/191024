import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BaseLayoutComponent } from "../shared/layouts";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [{ path: "", component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
