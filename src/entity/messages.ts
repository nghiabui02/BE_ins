import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Messages {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'text'})
    content: string;
    
}
