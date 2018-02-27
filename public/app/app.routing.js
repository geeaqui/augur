"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var binance_component_1 = require("./binance/binance.component");
var routes = [
    { path: 'binance', component: binance_component_1.BinanceComponent },
    //{ path: 'customers/:id', component: CustomerEditComponent},
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/binance' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [binance_component_1.BinanceComponent]
};
//# sourceMappingURL=app.routing.js.map