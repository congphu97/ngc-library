import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
else {
  console.log( environment.SERVER_API_URL)
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
