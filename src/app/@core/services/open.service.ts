import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CONFIG, Config } from "@core/core.options";

@Injectable()
export class OpenService {
  count = 0;
  constructor(
    private http: HttpClient,
    @Inject(CONFIG) private config: Config
  ) {
    console.log("config", config);
  }
  categories() {
    return this.http.get("https://api.publicapis.org/categories");
  }
  add() {
    this.count++;
  }
}
