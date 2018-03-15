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

//import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse } from '../shared/interfaces';

@Injectable()
export class DataService {
    queryParam :string  = null;
    baseUrl: string ;
    anyDatas : any;
    bids : any[];
    binanceData : IData;

    constructor(private http: HttpClient) { 

    }

   getData(coin :string) : Observable<IData>{

    this.queryParam = coin;
    this.baseUrl= '/data/' + this.queryParam;

    console.log('getting the data on the back-end');
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl, )
        .map((response : Response) => {
            console.log("find me");
            console.log(this.baseUrl);
            //console.log(JSON.parse(JSON.stringify(response)));
            this.binanceData = {
                bids: this.getBids(response),
                asks:this.getAsk(response),
                updateId: 1234
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

