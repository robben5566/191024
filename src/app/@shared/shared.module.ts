import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
const COMPONENTS = [BaseLayoutComponent];
const MODULES = [CommonModule, RouterModule, ReactiveFormsModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  providers: []
})
export class SharedModule {}
