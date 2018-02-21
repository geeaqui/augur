"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { CustomersComponent } from './customers/customers.component';
//import { CustomersGridComponent } from './customers/customers-grid.component';
//import { CustomerEditComponent } from './customers/customer-edit.component';
//import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
//import { IRouting } from './shared/interfaces';
var routes = [
    //{ path: 'customers', component: CustomersComponent},
    //{ path: 'customers/:id', component: CustomerEditComponent},
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes)
    //components: [ CustomersComponent, CustomerEditComponent, CustomerEditReactiveComponent, CustomersGridComponent ]
};
//# sourceMappingURL=app.routing.js.map