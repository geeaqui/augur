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
    }
    AppComponent.prototype.setCoin = function (coin) {
        this.coin = coin.toUpperCase();
        console.log(this.appTitle);
        this.getCoinData(this.coin);
    };
    AppComponent.prototype.getCoinData = function (coin) {
        var _this = this;
        this._data.getData(coin)
            .subscribe(function (data) { return _this.iData = data; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-tag',
            //template: ` <div>
            //<div>{{iData}}</div>
            //<div>To Tutorials Point</div>
            //</div> `,
            templateUrl: './app.component.html',
            styleUrls: ['../css/styles.css'],
            providers: [data_service_1.DataService]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map