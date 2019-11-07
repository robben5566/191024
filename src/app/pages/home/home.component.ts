import { Component, OnInit } from "@angular/core";
import { OpenService } from "@core/services/open.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private openService: OpenService) {}
  // count = this.openService.count;
  categories$ = this.openService.categories();
  uv$ = this.openService.uv();

  ngOnInit() {
    this.openService.uv().subscribe(data => {
      console.log(data);
    });
  }
  get count() {
    return this.openService.count;
  }
  add() {
    this.openService.add();
  }
}
