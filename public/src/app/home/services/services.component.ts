import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {LoginStat} from "../../../shared/services/login.stats";
import {TranslatePipe} from "ng2-translate";
import {Services} from "./servises.service";
import {LoginStat} from "../../shared/services/login.stats";
import {UserComponent} from "../../user/user.component";
import {ProviderService} from "../../user/provider/service/provider-service";
import {CurrentOsbbService} from "../../../shared/services/current.osbb.service";

@Component({
    selector: 'myosbb-services',
    templateUrl: './src/app/home/services/services.html',
    styleUrls: ['./src/app/home/services/services.css', 'src/app/home/components/apartment/styles.css'],
    directives: [ROUTER_DIRECTIVES, UserComponent],
    inputs: ['isLoggedIn'],
    outputs: ['isLoggedIn'],
    pipes: [TranslatePipe],
    providers: [LoginStat, Services, CurrentOsbbService]
})
export class ServicesComponent implements OnInit {

    isLoggedIn: boolean;
    loading: boolean = true;

    servicesMap : Array<any> = [];
    obssId: number = null;

    constructor(private _loginStat: LoginStat, private _osbbService: CurrentOsbbService, private _services: Services) {
    }

    ngOnInit(): any {
        this._loginStat.loggedInObserver$
            .subscribe(stat => {
                this.isLoggedIn = stat;
            });
        this.obssId = this._osbbService.getCurrentOsbbId();
        console.log(this.obssId);
        this._services.getAllServicesByOsbb(this.obssId).subscribe((data)=> {
            for (let service of data) {
                this._services.getSubServicesByServiceId(service.serviceId).subscribe((data)=> {
                    this.servicesMap.push(new Object({service : service, subServices : data, displaySub: false}));
                        console.info("All", this.servicesMap);
                    }
                );
                this.loading = false;
            }
        });
    }

    displaySub(service: any){
        for (let s of this.servicesMap) {
            if (service.serviceId == s.serviceId) {
               s.displaySub = !s.displaySub;
            }
        }
    }


}