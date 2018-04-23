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
        this.queryParam = null;
        this.coinList = [
            "TRX", "ETH", "QTUM", "BNB", "ICX", "QLC",
            "ONT", "XRP", "EOS", "ADA", "DGD", "DNT", "LTC",
            "XLM", "ENJ", "NEBL", "NCASH", "MTL", "NANO", "TNT",
            "STORM", "GVT", "BCC", "BQX", "IOTA", "WAN", "AION", "XVG",
            "POA", "FUEL", "VEN", "VIB", "ETC", "DASH", "CTR", "NULS",
            "LINK", "STRAT", "BCD", "XMR", "WAVES", "XEM", "AST", "SUB",
            "OMG", "REQ", "BCPT", "SNT", "EDO", "WTC", "RCN", "BTG", "EVX",
            "SALT", "INS", "ELF", "MCO", "ZIL", "TRIG", "POWR", "TNB", "LEND",
            "LSK", "APPC", "KNC", "BLZ", "SNGLS", "CMT", "GTO", "POE", "CND", "CDT",
            "NAV", "ADX", "WABI", "LUN", "GAS", "AMB", "VIBE", "OST", "ARK", "ZRX",
            "ZEC", "QSP", "LRC", "MOD", "HSR", "ARN", "RPX", "FUN", "MDA", "GXS", "MTH",
            "CHAT", "MANA", "PIVX", "STEEM", "AE", "WINGS", "BTS", "SNM", "BRD", "RLC",
            "KMD", "OAX", "DLT", "XZC", "BAT", "RDN", "ICN", "VIA", "YOYO", "STORJ", "BNT"
        ];
        this.newCoinList = new Array;
    }
    //Binance API
    DataService.prototype.getData = function (coin) {
        var _this = this;
        this.queryParam = coin;
        this.baseUrl = '/data/' + this.queryParam;
        console.log('getting the data on the back-end');
        console.log(this.baseUrl);
        return this.http.get(this.baseUrl)
            .map(function (response) {
            _this.binanceData = {
                bids: _this.getBids(response),
                asks: _this.getAsk(response),
                updateId: 1234 // sample ID
            };
            console.log("Binace Data log");
            console.log(_this.binanceData);
            _this.anyDatas = JSON.parse(JSON.stringify(response));
            console.log(_this.anyDatas);
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
    //Binance API END
    //Binance API 2
    DataService.prototype.getCoinAcivity = function () {
        var _this = this;
        this.baseUrl = '/marketprice/' + this.queryParam; // get the query param once getData() is invoke
        console.log('getting the data on the back-end');
        console.log(this.baseUrl);
        return this.http.get(this.baseUrl)
            .map(function (response) {
            _this.coinActivityData = JSON.parse(JSON.stringify(response));
            console.log("sample lang");
            console.log(_this.coinActivityData);
            return _this.coinActivityData;
        })
            .catch(this.handleError);
    };
    //Binance API 2 END
    //MarketCap API
    DataService.prototype.getMarketPrice = function () {
        var _this = this;
        this.baseUrl = '/marketprice';
        console.log('getting the data on the back-end');
        console.log(this.baseUrl);
        return this.http.get(this.baseUrl)
            .map(function (response) {
            _this.marketPrice = JSON.parse(JSON.stringify(response));
            for (var _i = 0, _a = _this.marketPrice; _i < _a.length; _i++) {
                var coin = _a[_i];
                for (var _b = 0, _c = _this.coinList; _b < _c.length; _b++) {
                    var list = _c[_b];
                    if (coin.symbol == list) {
                        _this.newCoinList.push(coin.symbol);
                    }
                }
            }
            console.log("new List of coins");
            console.log(_this.newCoinList);
            return _this.marketPrice;
        })
            .catch(this.handleError);
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
//# sourceMappingURL=data.service.js.map