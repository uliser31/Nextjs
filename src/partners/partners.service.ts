import { Injectable } from '@nestjs/common';

import {partner} from './partner.entity'

@Injectable()
export class PartnersService {

    private partners: partner[] = [
        {
            id: 1,
            name: "Uliser Barrero Rodriguez" 
        },
    ]
    
    getAllPartners(){
       return this.partners
    }

    createPartners(){}
    updatePartners(){}
    deletePartners(){}
}
