import { Attachment } from './attachment';
import { Street, District } from './addressDTO';
import {Bank} from "./bank.interface";

export class OsbbDTO {
    osbbId: number;
    name: string;
    description: string;
    street: Street;
    address: string;
    district: District;
    houseNumber: string;
    logo: Attachment;
    creationDate: Date;
    available: boolean;
    bank: Bank;
}
