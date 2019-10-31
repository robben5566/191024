import { Component, OnInit } from "@angular/core";
import { OpenService } from "@core/open.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private openService: OpenService) {}

  ngOnInit() {}
  categories$ = this.openService.categories();

  get count() {
    return this.openService.count;
  }
  add() {
    this.openService.add();
  }
}
