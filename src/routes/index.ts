import { PeopleController } from "../controllers/people.controller";
import {UserController} from "../controllers/user.controller";
import {ReportController} from "../controllers/report.controller";

export const Routes = [
 // ------------ Users --------------- //  
{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "GetAllUsers"
}, 
{
    method: "post",
    route: "/users",
    controller: UserController,
    action: "SaveUser"
},
{
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "GetOneUser"
},
{
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "RemoveUser"
},

// ------------ People --------------- //  
{
    method: "get",
    route: "/people",
    controller: PeopleController,
    action: "GetAllPeople"
},
{
    method: "get",
    route: "/people/:id",
    controller: PeopleController,
    action: "GetOnePeople"
},
{
    method: "get",
    route: "/faculty",
    controller: PeopleController,
    action: "GetFacylty"
},

// ------------ Reports --------------- // 
{
    method: "get",
    route: "/report",
    controller: ReportController,
    action: "SendTemplate"
},

];