import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { RouterModule } from "@angular/router";

const COMPONENTS = [BaseLayoutComponent];
const MODULES = [CommonModule, RouterModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  providers: []
})
export class SharedModule {}
