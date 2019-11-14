import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { OpenService } from "@core/services/open.service";
import { AUTH_CONFIG } from "@auth/auth.option";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ["", [Validators.required, Validators.minLength(3)]],
    password: ["", Validators.required]
  });

  constructor(
    private openService: OpenService,
    private formBuilder: FormBuilder,
    @Inject(AUTH_CONFIG) private config: string
  ) {}

  ngOnInit() {
    console.log("auth_config", this.config);
  }
  categories$ = this.openService.categories();

  get count() {
    return this.openService.count;
  }
  add() {
    this.openService.add();
  }

  onSubmit() {
    console.log(this.loginForm.status);
  }
}
