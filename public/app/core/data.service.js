"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
//import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse } from '../shared/interfaces';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = '/data/:coin';
    }
    DataService.prototype.getData = function () {
        var _this = this;
        console.log('getting the data on the back-end');
        return this.http.get(this.baseUrl)
            .map(function (response) {
            console.log("find me");
            //console.log(JSON.parse(JSON.stringify(response)));
            _this.binanceData = {
                bids: _this.getBids(response),
                asks: _this.getAsk(response),
                updateId: 1234
            };
            console.log("Binace Data log");
            console.log(_this.binanceData);
            _this.anyDatas = JSON.parse(JSON.stringify(response));
            console.log(_this.anyDatas);
            //return this.anyDatas;
            return _this.binanceData;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getBids = function (response) {
        var res = JSON.parse(JSON.stringify(response));
        return res.bids;
    };
    DataService.prototype.getAsk = function (response) {
        var res = JSON.parse(JSON.stringify(response));
        return res.asks;
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return Observable_1.Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
Todo;
add;
the;
parametters in data.service;
TODO;
consume;
the;
query;
params in the;
component;
which;
inputs;
will;
be;
getting;
from;
the;
front - end;
Read;
the;
angular;
http;
documentation;
https: ; //www.concretepage.com/angular-2/angular-2-http-get-parameters-headers-urlsearchparams-requestoptions-example
//# sourceMappingURL=data.service.js.map