import { ContactModel } from "app/models/contact.model";
import { AddressBuildingModel } from "app/models/addressBuilding.model";

export class CustomerModel {
    constructor(
    public key:string,
    public customerName: string,
    public address: AddressBuildingModel,
    public phone: string,
    public fax: string,
    public email: string,
    public website: string,
    public contacts: ContactModel[],
    ){}
}