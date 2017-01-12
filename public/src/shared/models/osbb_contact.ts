import {Attachment} from "./attachment";
export interface OssbbContact {
    id: string,
    osbbId: number,
    contactCategoryName: string,
    contactCategoryId: number,
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    phone2: string,
    userId: number,
    apartmentNum: number,
    attachments: Attachment
}