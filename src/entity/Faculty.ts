import {Entity, PrimaryGeneratedColumn, Column , OneToMany} from "typeorm";
import { Direction } from "./Direction";
import { People } from "./People";
import { Profile } from "./Profile";

@Entity({name : 'faculty'})
export class Faculty {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'character varying', length: 35})
    name: string;

    // Направление
    @OneToMany(() => Direction, dir => dir.faculty)
    direction: Direction[];
    // Профиль подготовки
    @OneToMany(() => Profile, prof => prof.faculty)
    profile: Profile[];


    @OneToMany(() => People, people => people.faculty)
    peoples: People[];

}