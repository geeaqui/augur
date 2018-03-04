import { Component } from '@angular/core';
import { DataService } from './core/data.service';
import { Observer } from 'rxjs/Observer';

@Component({ 
  selector: 'app-tag', // custom html tag which can be used in the html page
  template: ` <div>
  
  <div>To Tutorials Point</div>
</div> `,
  providers: [DataService, ]
})
export class AppComponent {
  //appTitle: string = 'Welcome adsasafsagsgfsdhdfxgjfgkfgk';
  iData : any;
  bids : any[];
  constructor(private _data : DataService){
  }

  ngOnInit() : void{
    this._data.getData()
      .subscribe(data => this.iData = data);
      //this.bids = this._data.bids;
  }
}