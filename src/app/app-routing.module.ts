import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [{ path: "", component: HomeComponent }]
  },
  //{ path: "login", component: LoginComponent }
  {
    path: "auth",
    // loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    loadChildren: "./auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
