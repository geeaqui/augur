import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { Observer } from 'rxjs/Observer';

@Component({ 
  selector: 'app-tag', // custom html tag which can be used in the html page
  //template: ` <div>
  //<div>{{iData}}</div>
  //<div>To Tutorials Point</div>
//</div> `,
  templateUrl: './app.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [DataService]

})

export class AppComponent {
  appTitle : string = "Binance First Data Output";
  iData : any;
  coin : string;
  showData: boolean = false;
  coinList:Array<string> = [
                            "TRX","ETH","QTUM","BNB","ICX","QLC",
                            "ONT","XRP","EOS","ADA","DGD","DNT","LTC",
                            "XLM","ENJ","NEBL","NCASH","MTL","NANO","TNT",
                            "STORM","GVT","BCC","BQX","IOTA","WAN","AION","XVG",
                            "POA","FUEL","VEN","VIB","ETC","DASH","CTR","NULS",
                            "LINK","STRAT","BCD","XMR","WAVES","XEM","AST","SUB",
                            "OMG","REQ","BCPT","SNT","EDO","WTC","RCN","BTG","EVX",
                            "SALT","INS","ELF","MCO","ZIL","TRIG","POWR","TNB","LEND",
                            "LSK","APPC","KNC","BLZ","SNGLS","CMT","GTO","POE","CND","CDT",
                            "NAV","ADX","WABI","LUN","GAS","AMB","VIBE","OST","ARK","ZRX",
                            "ZEC","QSP","LRC","MOD","HSR","ARN","RPX","FUN","MDA","GXS","MTH",
                            "CHAT","MANA","PIVX","STEEM","AE","WINGS","BTS","SNM","BRD","RLC",
                            "KMD","OAX","DLT","XZC","BAT","RDN","ICN","VIA","YOYO","STORJ","BNT"
                          ];
  
  constructor(private _data : DataService){
  }

  setCoin(coin:string):void{
    this.coin = coin.toUpperCase();
    console.log(this.appTitle);

    this.getCoinData(this.coin);
    this.showData = true;
  }

  getCoinData(coin:string):void{
    this._data.getData(coin)
    .subscribe(data => this.iData = data);
  }

  /*
  ngOnInit() : void{
    this._data.getData(this.coin)
      .subscribe(data => this.iData = data);
      //this.bids = this._data.bids;
      
      //TODO how to display separate data bids,asks and Id instead of getting eveything as a whole;
      //currently used interface to to define eash data but its not working;
  }
*/
}
