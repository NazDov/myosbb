import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { HousePageObject } from "./house.page.object";
import { PageParams } from "../../shared/models/search.model";
import ApiService = require("../../shared/services/api.service");


@Injectable()
export class HouseService {

    public houseURL: string = ApiService.serverUrl + '/restful/house/';
    public housesByPageUrl = ApiService.serverUrl + '/restful/house?pageNumber=';
    public housesBySearchParam = ApiService.serverUrl + '/restful/house/find?searchParam=';
    public adminHouseURL = ApiService.serverUrl+'/restful/admin/house/';
    public managerHouseUrl = ApiService.serverUrl+'/restful/manager/house/';

    constructor(private _http: Http) {
    }

    getHouseById(houseId: number): Observable<any> {
        return this._http.get(this.houseURL + houseId)
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }

    deleteHouseById(houseId: number): Observable<any> {
        return this._http.delete(this.adminHouseURL + houseId)
            .catch((error)=>Observable.throw(error));
    }

    listAllHouses(): Observable<any> {
        return this._http.get(this.houseURL + 'all')
            .map((response)=>response.json())
            .catch((error)=>Observable.throw(error));
    }

    currentUser_getAllHousesByOsbb(pageParams: PageParams): Observable<any> {
        return this._http.post(this.houseURL + 'current/', JSON.stringify(pageParams))
            .map((response) => response.json())
            .catch((error) => Observable.throw(error));
    }

    admin_getAllHouses(pageParams: PageParams): Observable<any> {
        return this._http.post(this.adminHouseURL + 'all', JSON.stringify(pageParams))
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }


    getAllApartmentsByHouseId(houseId: number): Observable<any> {
        return this._http.get(this.houseURL + houseId + '/apartments')
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }

    searchByInputParam(value: string): Observable<any> {
        console.log('service ', value);
        return this._http.get(this.housesBySearchParam + value)
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }

    saveHouseForAdmin(house: HousePageObject): Observable<any> {
        return this._http.post(this.adminHouseURL, JSON.stringify(house))
            .catch((error)=> Observable.throw(error));
    }

    saveHouseForManager(house: HousePageObject): Observable<any> {
        return this._http.post(this.managerHouseUrl, JSON.stringify(house))
            .catch((error)=> Observable.throw(error));
    }

}