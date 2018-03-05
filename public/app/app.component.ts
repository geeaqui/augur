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

  //TODO check what does provider does
})
export class AppComponent {
  appTitle : string = "Binance First Data Output";
  iData : any;
  
  constructor(private _data : DataService){
  }

  ngOnInit() : void{
    this._data.getData()
      .subscribe(data => this.iData = data);
      //this.bids = this._data.bids;
      
      //TODO how to display separate data bids,asks and Id instead of getting eveything as a whole;
      //currently used interface to to define eash data but its not working;

      
  }
}