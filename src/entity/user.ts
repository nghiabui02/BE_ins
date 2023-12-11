import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    username: string;
    @Column({type: 'varchar'})
    name: string;
    @Column({type: 'varchar'})
    password: string;
    @Column({type: 'longtext', nullable: true})
    image : string;
}