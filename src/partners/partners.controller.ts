import { Controller,Get  } from '@nestjs/common';
import { PartnersService } from './partners.service';

@Controller('partners')
export class PartnersController {
    
    constructor(private partnersService:PartnersService){}
    
    @Get()
    getAllPartners(){
       return this.partnersService.getAllPartners()    }

}
