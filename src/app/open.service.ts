import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class OpenService {
  count = 0;
  constructor(private http: HttpClient) {
    const mock = environment.useMock;
    console.log("mock:", mock);
  }
  categories() {
    return this.http.get("https://api.publicapis.org/categories");
  }
  add() {
    this.count++;
  }
}
