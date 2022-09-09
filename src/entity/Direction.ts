import {Entity, PrimaryGeneratedColumn, Column , ManyToOne} from "typeorm";
import { Faculty } from "./Faculty";

@Entity({name : 'direction'})
export class Direction {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'character varying', length: 200})
    name: string;

    @ManyToOne(() => Faculty, fac => fac.direction)
    faculty: Faculty;

}