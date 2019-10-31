import { NgModule, ModuleWithProviders } from "@angular/core";

@NgModule({
  declarations: [],
  imports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
