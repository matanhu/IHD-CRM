import { AddressBuildingModel } from "app/models/addressBuilding.model";

export class ContactModel {
    
    public firstName: string;
    public lastName: string;
    public email: string;
    public celPhone: string;
    public phone: string;
    public address: AddressBuildingModel;

    constructor(){}
}