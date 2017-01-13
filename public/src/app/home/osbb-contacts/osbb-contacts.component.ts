import {Component, OnInit} from '@angular/core';

import {OsbbDTO} from "../../../shared/models/osbbDTO";
import {OsbbService} from '../../admin/components/osbb/osbb.service';
import {TranslatePipe} from 'ng2-translate';
import {CapitalizeFirstLetterPipe} from '../../../shared/pipes/capitalize-first-letter';
import {CurrentUserService} from "../../../shared/services/current.user.service";
import {User} from '../../../shared/models/User';
import {HeaderComponent} from '../../header/header.component';
import {OssbbContact} from "../../../shared/models/osbb_contact";
import {OsbbContactService} from "./osbb-contact-service";

@Component({
    selector: 'user-menu-osbb-contacts',
    templateUrl: 'src/app/home/osbb-contacts/osbb-contacts.html',
    styleUrls: ['src/app/home/osbb-contacts/osbb-contacts.css'],
    providers: [OsbbService, OsbbContactService],
    pipes: [CapitalizeFirstLetterPipe, TranslatePipe]
})
export class OsbbContactsComponent implements OnInit {


    private userOsbb: OsbbDTO;
    private user: User;
    private osbbRetrieved = false;

    private contacts: Array<OssbbContact> = [];
    private managementMembers: Array<OssbbContact> = [];
    private managementHead: OssbbContact = null;


    constructor(private osbbService: OsbbService, private userSevice: CurrentUserService, private osbbContactService: OsbbContactService) {
        this.userOsbb = null;
    }

    ngOnInit(): any {
        this.getUser();
        this.getOsbb();
    }

    getUser() {
        this.user = this.userSevice.getUser();
        console.log('Current user is ' + this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.osbbId);
    }

    getOsbb() {
        console.log(this.user);
        this.osbbService.getDTOOsbbById(this.user.osbbId)
            .then(osbb => {
                this.userOsbb = osbb;
                console.log(this.userOsbb);
                this.getOsbbContacts();
            });
    }

    private getOsbbContacts(){
        this.osbbContactService.getOsbbContacts().subscribe((data)=> {
            this.contacts = data;
            this.osbbContactService.getManagementMemberContacts().subscribe((data)=> {
                this.managementMembers = data;
                this.osbbContactService.getManagementHeadContacts().subscribe((data)=> {
                    this.managementHead = data;
                    this.osbbRetrieved = true;
                });
            });
        });
    }
}
