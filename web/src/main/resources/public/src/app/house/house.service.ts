import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class HouseService {

    public getHouseByIdUrl: string = ApiService.serverUrl + '/restful/house/';

    constructor(private _http: Http) {
    }

    getHouseById(houseId: number): Observable<any> {
        return this._http.get(this.getHouseByIdUrl + houseId)
            .map((response)=> response.json())
            .catch((error)=>Observable.throw(error));
    }


}