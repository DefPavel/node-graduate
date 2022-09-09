import {Entity, PrimaryGeneratedColumn, Column , ManyToOne} from "typeorm";
import { Faculty } from "./Faculty";

@Entity({name : 'profile'})
export class Profile {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'character varying', length: 200})
    name: string;

    @ManyToOne(() => Faculty, fac => fac.profile)
    faculty: Faculty;

}