import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import {LoginStat} from "../../../shared/services/login.stats";

@Component({
    selector: 'app-home',
    templateUrl: './src/app/home/home.html',
    styleUrls: ['./src/app/home/home.css'],
    directives: [ROUTER_DIRECTIVES ],
    inputs: ['isLoggedIn'],
    outputs: ['isLoggedIn'],
    providers: [LoginStat]
})
export class ServicesComponent  implements OnInit{



    ngOnInit(): any {
        return undefined;
    }

}