import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//import { appRouting } from './app.routing';
import { CoreModule }   from './core/core.module';
//import { SharedModule }   from './shared/shared.module';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';


@NgModule({
  imports: [
    BrowserModule, 
    CoreModule,   
    MaterializeModule,
    FormsModule
  ],
  declarations: [ AppComponent, FilterPipe ],
  bootstrap:    [ AppComponent ] // This is used to tell Angular JS which components need to be loaded so that its functionality can be accessed in the application. Once you include the component in the bootstrap array, you need to declare them so that they can be used across other components in the Angular JS application.
})
export class AppModule { }
