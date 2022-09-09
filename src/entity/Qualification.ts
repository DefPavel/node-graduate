import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name : 'qualification'})
export class Qualification {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'character varying', length: 35})
    name: string;

}