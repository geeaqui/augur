import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {IData} from '../shared/interface'
import { forEach } from '@angular/router/src/utils/collection';

//import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse } from '../shared/interfaces';

@Injectable()
export class DataService {
    queryParam :string  = null;
    baseUrl: string ;
    anyDatas : any;
    binanceData : IData;
    marketPrice:any[];
    coinActivityData:any[];

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

    newCoinList:Array<string> = new Array;


    constructor(private http: HttpClient) { 

    }

    //Binance API
   getData(coin :string) : Observable<IData>{

    this.queryParam = coin;
    this.baseUrl= '/data/' + this.queryParam;

    console.log('getting the data on the back-end');
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl, )
        .map((response : Response) => {
        
            this.binanceData = {
                bids: this.getBids(response),
                asks:this.getAsk(response),
                updateId: 1234 // sample ID
            }

            console.log("Binace Data log");
            console.log(this.binanceData);
            this.anyDatas = JSON.parse(JSON.stringify(response));
            console.log(this.anyDatas);

            return this.binanceData;
        })
        .catch(this.handleError);
    }
   
    private getBids(response : Response) : any[]{
            let res = JSON.parse(JSON.stringify(response));
            return res.bids;
    } 

    private getAsk(response : Response) : any[]{
        let res = JSON.parse(JSON.stringify(response));
        return res.asks;
    }
    //Binance API END


    //Binance API 2
    getCoinAcivity() : Observable<any>{
        this.baseUrl= '/marketprice/'+ this.queryParam; // get the query param once getData() is invoke
    
        console.log('getting the data on the back-end');
        console.log(this.baseUrl);
        return this.http.get(this.baseUrl)
            .map((response : Response) => {
                this.coinActivityData = JSON.parse(JSON.stringify(response));

                console.log("sample lang");
                console.log(this.coinActivityData);
                return this.coinActivityData;
            })
            .catch(this.handleError);
        }
    //Binance API 2 END

    //MarketCap API
    getMarketPrice() : Observable<any>{

        this.baseUrl= '/marketprice';
    
        console.log('getting the data on the back-end');
        console.log(this.baseUrl);
        return this.http.get(this.baseUrl)
            .map((response : Response) => {
                this.marketPrice = JSON.parse(JSON.stringify(response));

                for(let coin of this.marketPrice){
                    for(let list of this.coinList){
                        if(coin.symbol == list){
                            this.newCoinList.push(coin.symbol);
                        }
                    }

                }
                console.log("new List of coins");
                console.log(this.newCoinList);
                return this.marketPrice;
            })
            .catch(this.handleError);
        }


    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}   

