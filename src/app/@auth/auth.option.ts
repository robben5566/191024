import { InjectionToken } from "@angular/core";

export const DEFAULT_CONFIG = {
  form: {
    login: {
      username: {
        required: true,
        minLength: 3
      },
      password: {},
      redirect: {
        url: "",
        delay: 1000
      },
      messages: {
        error: "",
        successs: ""
      }
    }
  }
};
export type DefaultConfig = typeof DEFAULT_CONFIG;
export const AUTH_CONFIG = new InjectionToken<DefaultConfig>("app config");
