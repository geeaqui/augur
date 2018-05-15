import { ModuleWithProviders } from '@angular/core';

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IData{
    bids: any[],
    asks: any[],
    updateId : number
}

export interface IMarketData {
    symbol:string,
    name :string,
    price:number,
    rank:number,
    supply:number
}

export class Product { 
    constructor ( 
       public bids: any[], 
       public ask: any[] 
    ) {  } 
 }

