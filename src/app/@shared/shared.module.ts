import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { RouterModule } from "@angular/router";

const COMPONENTS = [BaseLayoutComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
