import { Component , Input } from '@angular/core';
import { DataService } from './core/data.service';
import { Observer } from 'rxjs/Observer';
//import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IMarketData } from './shared/interface';

@Component({ 
  selector: 'app-tag', // custom html tag which can be used in the html page
  templateUrl: './app.component.html',
  styleUrls: ['../css/styles.css'],
  providers: [DataService],
  animations:[
    trigger('thisState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('1s ease-in')
      ]),
      transition('* => void', [
        animate('1s 1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})

export class AppComponent {
  appTitle : string = "Binance First Data Output";
  iData : any;
  coinActivityLog: any;
  //marketData:any[];
  marketData:Array<IMarketData> = new Array<IMarketData>();
  coin : string;
  showData: boolean = false;
  showCard:boolean = true;
  newCoinList:Array<string>;
  goStop:string;
  filterMe:string = "";
  testState:string = "active";
  resetCoidList :Array<string> = new Array<string>();
  thisFly:string = "in";

  constructor(private _data : DataService){
  }

  //initialize on the page without the need of invoking it
  ngOnInit(){
   this._data.getMarketPrice()
      .subscribe(data => {
        //this.marketData = data;
        console.log("test check the marketing data");
        console.log(this._data.marketDataList);
        this.marketData = this._data.marketDataList;
        this.newCoinList = this._data.newCoinList;
      });
  }

  setCoin(coin:string):void{
    this.coin = coin.toUpperCase();
    console.log(this.appTitle);

    this.getCoinData(this.coin);
    this.showData = true;
    this.getCoinActivity();
    //this.flyIn();
  }

  getCoinData(coin:string):void{
    this._data.getData(coin)
    .subscribe(data => this.iData = data);
  }

  getCoinActivity():void{
    this._data.getCoinAcivity()
    .subscribe(data => {
      this.coinActivityLog = data;

      if(data.priceChangePercent.startsWith("-")){
        this.goStop = "stop";
      }else{
        this.goStop = "go";
      }
    });
  }

  goToHomepage(){
    this.showData = false;
    this.resetCoinList();
  }

  findSingleCoin(coin:string): void{
    this.newCoinList =[];
    this.newCoinList.push(coin);
    console.log(this.newCoinList);
    this.filterMe = "";
    

  }

  resetCoinList():void{
    this.newCoinList = this._data.marketCoinList;
  }
/*
  flyIn() {
    this.thisFly = this.thisFly === 'in' ? 'out' : 'in';
    console.log(this.thisFly);
  }
  */
}




