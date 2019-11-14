import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { OpenService } from "@core/services/open.service";
import { AUTH_CONFIG, DefaultConfig } from "@auth/auth.option";
import { AuthService } from "@auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ["", this.usernameVaildatorFns()],
    password: ["", this.passwordVaildatorFns()]
  });

  constructor(
    private openService: OpenService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    @Inject(AUTH_CONFIG) private config: DefaultConfig
  ) {}

  ngOnInit() {
    console.log("auth_config", this.config.form);
  }
  categories$ = this.openService.categories();

  usernameVaildatorFns() {
    return [Validators.required, Validators.minLength(3)];
  }

  passwordVaildatorFns() {
    return [Validators.required];
  }
  get count() {
    return this.openService.count;
  }
  add() {
    this.openService.add();
  }

  onSubmit() {
    console.log(this.loginForm.status);
    this.authService.login(this.loginForm.value).subscribe(response => {
      console.log(response);
    });
  }
}
