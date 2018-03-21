import { NgModule, Optional, SkipSelf } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//core.module.ts.httpmodule file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { DataService } from './data.service';
//import { DataFilterService } from './data-filter.service';
//import { Sorter } from './sorter';
//import { TrackByService } from './trackby.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';


@NgModule({
  imports: [ 
    //Can use with Angular 4.3+ to 
    HttpClientModule, 
    //Can use to override default names for XSRF cookie and header
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'My-XSRF-TOKEN',
    //   headerName: 'My-X-XSRF-TOKEN',
    // })
  ],
  //providers: [ DataService, DataFilterService, Sorter, TrackByService] 
  providers: [ DataService] 
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}




