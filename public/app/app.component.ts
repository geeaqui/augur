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
  providers: [DataService]

})

export class AppComponent {
  appTitle : string = "Binance First Data Output";
  iData : any;
  coin : string;
  
  constructor(private _data : DataService){
  }

  setCoin(coin:string):void{
    this.coin = coin.toUpperCase();
    console.log(this.appTitle);

    this.getCoinData(this.coin);
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
