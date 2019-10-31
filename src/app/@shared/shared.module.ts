import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";
import { RouterModule } from "@angular/router";
import { OpenService } from "../open.service";

const COMPONENTS = [BaseLayoutComponent];
const MODULES = [CommonModule];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS, ...MODULES],
  providers: [OpenService]
})
export class SharedModule {}
