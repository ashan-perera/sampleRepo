import { Address } from 'src/app/models/address';

export class Student {
    
    id: number;
    firstName: string;    
    lastName: string;   
    addresses: Address[];  
    contactNo: string;
    dateOfBirth: Date;

}
