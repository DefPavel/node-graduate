import {Entity, PrimaryGeneratedColumn, Column ,ManyToOne , OneToMany} from "typeorm";
import { Faculty } from "./Faculty";

export enum Gender {
    male = "муж",
    female = "жен",
}

@Entity({name : 'people'})
export class People {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'character varying', length: 85 , comment: 'Фамилия' , nullable: false})
    surname: string;
    @Column({type: 'character varying', length: 35 , comment: 'Имя', nullable: false})
    name: string;
    @Column({type: 'character varying', length: 85 , comment: 'Отчество', nullable: false})
    patronymic: string;
    @Column({type: 'enum', enum: Gender, default:Gender.male , comment: 'Гендер', nullable: false})
    gender: Gender;
    @Column({type: 'date' , comment: 'Дата рождения' , default: new Date() , nullable: false})
    birthday: Date;

    @Column({type: 'character varying', length: 35 , nullable: true})
    address_country: string;

    @Column({type: 'character varying', length: 55, nullable: true})
    address_region: string;

    @Column({type: 'character varying', length: 85, nullable: true})
    address_area: string;

    @Column({type: 'character varying', length: 85, nullable: true})
    address_city: string;

    @Column({type: 'character varying', length: 85 , nullable: true})
    address_street: string;

    @Column({type: 'character varying', length: 20 , nullable: true})
    address_home: string;


    @ManyToOne(() => Faculty, fac => fac.peoples)
    faculty: Faculty[];


}