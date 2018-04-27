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
var AppComponent = /** @class */ (function () {
    function AppComponent(_data) {
        this._data = _data;
        this.appTitle = "Binance First Data Output";
        this.showData = false;
        this.showCard = true;
        this.filterMe = "";
    }
    //initialize on the page without the need of invoking it
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.getMarketPrice()
            .subscribe(function (data) {
            _this.marketData = data;
            _this.newCoinList = _this._data.newCoinList;
            console.log(data);
        });
    };
    AppComponent.prototype.setCoin = function (coin) {
        this.coin = coin.toUpperCase();
        console.log(this.appTitle);
        this.getCoinData(this.coin);
        this.showData = true;
        this.getCoinActivity();
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
    };
    AppComponent.prototype.findSingleCoin = function (coin) {
        this.newCoinList = [];
        this.newCoinList.push(coin);
        console.log(this.newCoinList);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-tag',
            /*
            template: `
              <div>
              <input type="text" [(ngModel)]="term">
              <div *ngFor = "let coin of newCoinList |filter:term" >
                <p>
                  {{coin}}
                </p>
              </div>
          
          </div>
          `,
          */
            templateUrl: './app.component.html',
            styleUrls: ['../css/styles.css'],
            providers: [data_service_1.DataService]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
ngOnInit() : void{
  this._data.getData(this.coin)
    .subscribe(data => this.iData = data);
    //this.bids = this._data.bids;
    
    //TODO how to display separate data bids,asks and Id instead of getting eveything as a whole;
    //currently used interface to to define eash data but its not working;
}
*/
//# sourceMappingURL=app.component.js.map