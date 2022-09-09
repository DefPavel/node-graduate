import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { Role } from "../entity/Role";

export class UserController {

    private userRepository = getRepository(User);
    private roleRepository = getRepository(Role);

    async GetAllUsers(request: Request, response: Response) {
        //2 способра leftJoin
        // Через ORM
        return this.userRepository.find({relations:['roles']})
        // Через Builder
        /*return this.userRepository
        .createQueryBuilder("users")
        .leftJoinAndSelect("users.roles", "roles")
        .getOne();
        */
        
    }

    async GetOneUser(request: Request, response: Response) {
        return this.userRepository.findOne(request.params.id , {relations:['roles']});
    }

    async SaveUser(request: Request, response: Response) {
        // Получить роль
        const role = await this.roleRepository.findOne({where: {role: request.body.role}});
        const user = new User();
        user.firstname = request.body.firstname;
        user.username = request.body.username;
        user.lastname = request.body.lastname;
        user.roles = [role];

        return this.userRepository.save(user);
    }

    async RemoveUser(request: Request, response: Response) {
        const userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
        return userToRemove;
    }
 }