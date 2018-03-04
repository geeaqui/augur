import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BinanceComponent } from './binance/binance.component';

//import { CustomersComponent } from './customers/customers.component';
//import { CustomersGridComponent } from './customers/customers-grid.component';
//import { CustomerEditComponent } from './customers/customer-edit.component';
//import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { IRouting } from './shared/interface';

const routes: Routes = [
  { path: 'binance', component: BinanceComponent},
  //{ path: 'customers/:id', component: CustomerEditComponent},
  //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
  //{ path: '**', pathMatch:'full', redirectTo: '/binance' } //catch any unfound routes and redirect to home page
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [BinanceComponent]
};