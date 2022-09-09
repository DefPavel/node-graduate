import {Entity, PrimaryGeneratedColumn, Column , ManyToMany , JoinTable} from "typeorm";
import { Role } from "./Role";
@Entity({name : 'users'})
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'character varying', length: 100})
    username: string;

    @Column({type: 'character varying', length: 100})
    firstname: string;

    @Column({type: 'character varying', length: 100})
    lastname: string;

    @ManyToMany(() => Role , {cascade: true})
    @JoinTable({ name: 'users_roles', joinColumn: {
            name: "id_user",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "id_role",
            referencedColumnName: "id"
        }
    })
    roles: Role[];
}
