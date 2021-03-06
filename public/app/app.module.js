"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
//import { appRouting } from './app.routing';
var core_module_1 = require("./core/core.module");
//import { SharedModule }   from './shared/shared.module';
var angular2_materialize_1 = require("angular2-materialize");
var forms_1 = require("@angular/forms");
var filter_pipe_1 = require("./filter.pipe");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                angular2_materialize_1.MaterializeModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [app_component_1.AppComponent, filter_pipe_1.FilterPipe],
            bootstrap: [app_component_1.AppComponent] // This is used to tell Angular JS which components need to be loaded so that its functionality can be accessed in the application. Once you include the component in the bootstrap array, you need to declare them so that they can be used across other components in the Angular JS application.
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map