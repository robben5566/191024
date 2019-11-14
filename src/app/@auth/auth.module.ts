import { NgModule, InjectionToken } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SharedModule } from "@shared/shared.module";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import {
  AUTH_CONFIG,
  DEFAULT_CONFIG,
  AUTH_DEFAULT_CONFIG,
  DefaultConfig
} from "@auth/auth.option";
import { AuthService } from "./auth.service";

import { defaultDeep } from "lodash";
export function authConfigFactory(defaultConfig: any) {
  console.log("...", defaultConfig);

  return defaultConfig;
}

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {
  static forRoot(option: DefaultConfig = DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_DEFAULT_CONFIG, useValue: option },
        {
          provide: AUTH_CONFIG,
          useFactory: authConfigFactory,
          deps: [AUTH_DEFAULT_CONFIG]
        },
        AuthService
      ]
    };
  }
}
