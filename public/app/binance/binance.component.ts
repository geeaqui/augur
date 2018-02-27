import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../core/data.service';


@Component({ 
  selector: 'binance', 
  templateUrl: './binance.component.html'
})
export class BinanceComponent implements OnInit {

    title: string;
    response : Response;
  constructor(private router: Router, 
              private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Binance Data';
    this.getData();
  }


  getData() {
    this.dataService.getData()
    .subscribe((res: Response) => {
      this.response = res;
      console.log(res);
      console.log("ano ba yan");
    },
    (err: any)=> console.log(err),
    () => console.log('getCustomersPage() retrieved customers'));
  }
}