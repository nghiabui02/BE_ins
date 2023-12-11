import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    tittle: string;
    @Column({type: 'varchar',})
    date: string;
    @Column({type: 'text'})
    content: string;
    @Column({type: 'longtext', nullable: true})
    image : string;
    @ManyToOne(() => User, (user) => user.id)
    user: User;
}