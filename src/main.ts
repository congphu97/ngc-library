import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ENVIRONMENT } from './environments/environment';

if (ENVIRONMENT.PRODUCTION) {
  enableProdMode();
}
else {
  console.log( ENVIRONMENT)
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
