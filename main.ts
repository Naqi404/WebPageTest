import { bootstrapApplication } from '@angular/platform-browser';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideEnvironmentNgxMask()
  ]
}).catch(err => console.error(err));
