import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http,  Headers, Response, RequestOptions} from "@angular/http";
import ApiService = require("../../../shared/services/api.service");
import 'rxjs/add/operator/map';


@Injectable()
export class Services {
    private urlServices = ApiService.serverUrl + '/restful/services/';
    private urlSubServices = ApiService.serverUrl + '/restful/subservices/';

    constructor(private _http: Http) {
    }

    getAllServices(): Observable<any> {
        return this._http.get(this.urlServices)
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }

     getAllServicesByOsbb(osbbId : number): Observable<any> {
        return this._http.get(this.urlServices + "osbb/" + osbbId)
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }


    getSubServicesByServiceId(id: number) : Observable<any> {
        return this._http.get(this.urlSubServices + "parent/" + id)
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }




}