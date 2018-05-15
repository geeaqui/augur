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
var data_service_1 = require("./core/data.service");
var animations_1 = require("@angular/animations");
var AppComponent = /** @class */ (function () {
    function AppComponent(_data) {
        this._data = _data;
        this.appTitle = "Binance First Data Output";
        //marketData:any[];
        this.marketData = new Array();
        this.showData = false;
        this.showCard = true;
        this.filterMe = "";
        this.testState = "active";
        this.resetCoidList = new Array();
        this.thisFly = "in";
    }
    //initialize on the page without the need of invoking it
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.getMarketPrice()
            .subscribe(function (data) {
            //this.marketData = data;
            console.log("test check the marketing data");
            console.log(_this._data.marketDataList);
            _this.marketData = _this._data.marketDataList;
            _this.newCoinList = _this._data.newCoinList;
        });
    };
    AppComponent.prototype.setCoin = function (coin) {
        this.coin = coin.toUpperCase();
        console.log(this.appTitle);
        this.getCoinData(this.coin);
        this.showData = true;
        this.getCoinActivity();
        //this.flyIn();
    };
    AppComponent.prototype.getCoinData = function (coin) {
        var _this = this;
        this._data.getData(coin)
            .subscribe(function (data) { return _this.iData = data; });
    };
    AppComponent.prototype.getCoinActivity = function () {
        var _this = this;
        this._data.getCoinAcivity()
            .subscribe(function (data) {
            _this.coinActivityLog = data;
            if (data.priceChangePercent.startsWith("-")) {
                _this.goStop = "stop";
            }
            else {
                _this.goStop = "go";
            }
        });
    };
    AppComponent.prototype.goToHomepage = function () {
        this.showData = false;
        this.resetCoinList();
    };
    AppComponent.prototype.findSingleCoin = function (coin) {
        this.newCoinList = [];
        this.newCoinList.push(coin);
        console.log(this.newCoinList);
        this.filterMe = "";
    };
    AppComponent.prototype.resetCoinList = function () {
        this.newCoinList = this._data.marketCoinList;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-tag',
            templateUrl: './app.component.html',
            styleUrls: ['../css/styles.css'],
            providers: [data_service_1.DataService],
            animations: [
                animations_1.trigger('thisState', [
                    animations_1.state('inactive', animations_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    animations_1.state('active', animations_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.5)'
                    })),
                    animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                    animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
                ]),
                animations_1.trigger('flyInOut', [
                    animations_1.state('in', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    animations_1.transition('void => *', [
                        animations_1.style({
                            opacity: 0,
                            transform: 'translateX(-100%)'
                        }),
                        animations_1.animate('1s ease-in')
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate('1s 1s ease-out', animations_1.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map