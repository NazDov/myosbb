import {Injectable} from "@angular/core";
import ApiService = require("../../../shared/services/api.service");
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";


@Injectable()
export class OsbbContactService{
    private url = ApiService.serverUrl + '/restful/contacts/';
    constructor(private _http: Http) {
    }
    getOsbbContacts() : Observable<any> {
       //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.url + "osbb/")
           .map(res => res.json())
           .catch((err) => Observable.throw(err));
    }

    getManagementContacts() : Observable<any> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.url + "management/")
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }

    getManagementHeadContacts() : Observable<any> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.url + "management/head/")
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }

    getManagementMemberContacts() : Observable<any> {
        //noinspection TypeScriptUnresolvedFunction
        return this._http.get(this.url + "management/member/")
            .map(res => res.json())
            .catch((err) => Observable.throw(err));
    }
}