/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app/routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes, withComponentInputBinding()),
  ],
}).catch((err) => console.error(err));
