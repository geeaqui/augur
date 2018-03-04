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
  
    baseUrl: string = '/data';
    anyDatas : any;
    bids : any[];
    binanceData : IData;

    constructor(private http: HttpClient) { 

    }

    
    /** 
     * First method to get data from node
    */
   /*
    getData() : Observable<any[]>{
        console.log('getting the data on the back-end');
        return this.http.get(this.baseUrl)
            .map((response : Response) => {
                console.log("find me");
                //console.log(JSON.parse(JSON.stringify(response)));
                this.anyDatas = JSON.parse(JSON.stringify(response));
                console.log(this.anyDatas);
                console.log("getting bids!!");

                //Assigning bids to the variable;
                this.bids = this.getBids(response)
                //console.log(JSON.stringify(response));
                //this.anyDatas.push(response);
                return JSON.stringify(response);
            })
            .catch(this.handleError);
    }
    */

   getData() : Observable<IData>{
    console.log('getting the data on the back-end');
    return this.http.get(this.baseUrl)
        .map((response : Response) => {
            console.log("find me");
            //console.log(JSON.parse(JSON.stringify(response)));
            this.anyDatas = JSON.parse(JSON.stringify(response));
            console.log(this.anyDatas);

            return this.anyDatas;
        })
        .catch(this.handleError);
    }
   
    getBids(response : Response) : any{
            let res = JSON.parse(JSON.stringify(response));
            return res.bids;
    } 

    getAsk(response : Response) : any{
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
