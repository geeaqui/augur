import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
.then((success: any) => console.log('App bootstrapped'))
.catch((err: any) => console.error(err));