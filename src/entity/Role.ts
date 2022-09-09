import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name : 'roles'})
export class Role {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'character varying', length: 100})
    role: string;

}