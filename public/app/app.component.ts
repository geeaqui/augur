import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

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
  marketData:any[];
  coin : string;
  showData: boolean = false;
  showCard:boolean = true;
  newCoinList:Array<string>;

  constructor(private _data : DataService){
  }

  //initialize on the page without the need of invoking it
  ngOnInit(){
   this._data.getMarketPrice()
      .subscribe(data => {
        this.marketData = data;
        this.newCoinList = this._data.newCoinList;
        console.log(data);
      });
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

  goToHomepage(){
    this.showData = false;
  }
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
