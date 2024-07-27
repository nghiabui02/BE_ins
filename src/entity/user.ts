import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { IsEmail, IsNotEmpty, Length } from 'class-validator';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    @IsNotEmpty({ message: 'Username is required' })
    @Length(2, 12, { message: 'Username must be between 2 and 12 characters' })
    username: string;
    @Column({type: 'varchar'})
    @IsNotEmpty({ message: 'Name is required' })
    @Length(2, 20, { message: 'Name must be between 2 and 20 characters' })
    name: string;
    @Column({type: 'varchar'})
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
    @Column({type: 'longtext', nullable: true})
    image : string;
}