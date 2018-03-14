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
  
    baseUrl: string = '/data/';
    anyDatas : any;
    bids : any[];
    binanceData : IData;

    constructor(private http: HttpClient) { 

    }

    setHeaderAndQueryParam(param : string) : void {
        
    }

   getData() : Observable<IData>{
    console.log('getting the data on the back-end');
    return this.http.get(this.baseUrl, {
        params:{
            coin : 'LTC'
        }
    })
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

            //return this.anyDatas;
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


    //Todo add the parametters in data.service
    //TODO consume the query params in the component which inputs will be getting from the front-end
    
