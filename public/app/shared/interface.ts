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

