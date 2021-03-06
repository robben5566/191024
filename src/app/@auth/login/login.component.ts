import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { OpenService } from "@core/services/open.service";
import { AuthService } from "@auth/auth.service";
import { AUTH_CONFIG, DefaultConfig } from "@auth/auth.option";
import { get } from "lodash";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ["", this.getValidators("username")],
    password: ["", this.getValidators("password")]
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

  getValidators(field: string) {
    const fns = [];
    const required = get(this.config, `form.login.${field}.required`);
    const minLength = get(this.config, `form.login.${field}.minLength`);
    if (required) {
      fns.push(Validators.required);
    }
    if (minLength) {
      fns.push(Validators.minLength(this.config.form.login.username.minLength));
    }
    return fns;
  }
  get count() {
    return this.openService.count;
  }
  add() {
    this.openService.add();
  }

  onSubmit() {
    //console.log(this.loginForm.status);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          setTimeout(() => {
            location.href = this.config.form.login.redirect.url;
            console.log(this.config);
          }, this.config.form.login.redirect.delay);
        }
      });
    }
  }
}
