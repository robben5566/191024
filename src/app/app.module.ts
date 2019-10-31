import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OpenService } from "./@core/open.service";
import { CoreModule } from "@core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [OpenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
