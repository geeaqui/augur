import { Injectable } from '@angular/core';

//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

//import { ICustomer, IOrder, IState, IPagedResults, ICustomerResponse } from '../shared/interfaces';

@Injectable()
export class DataService {
  
    baseUrl: string = '/api/binance';

    constructor(private http: HttpClient) { 

    }

    /** 
     * First method to get data from node
    */
    getData(){
        return this.http.get(this.baseUrl)
            .map((response) => {
                return response;
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
