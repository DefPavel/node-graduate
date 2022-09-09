import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {People} from "../entity/People";
import {Faculty} from "../entity/Faculty";


export class PeopleController { 

    private peopleRepository = getRepository(People);
    private facultyRepository = getRepository(Faculty);

    async GetAllPeople(request: Request, response: Response) {
        return this.peopleRepository.find({relations:['faculty']});
    }
    // вернуть одну персону
    async GetOnePeople(request: Request, response: Response) {
        return this.peopleRepository.findOne(request.params.id , {relations:['faculty']});
    }

    async GetFacylty(request: Request, response: Response) {
        return this.facultyRepository.find();
    }



}
