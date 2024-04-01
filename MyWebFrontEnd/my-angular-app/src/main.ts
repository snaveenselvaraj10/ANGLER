import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { UserComponent } from './app/user/user.component';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
