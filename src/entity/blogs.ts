import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {IsNotEmpty, Length} from "class-validator";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    @IsNotEmpty({ message: 'Title is required' })
    @Length(0, 255, { message: 'Title must be between 0 and 255 characters' })
    title: string;
    @Column({type: 'varchar',})
    date: string;
    @Column({type: 'varchar', length: 255})
    @IsNotEmpty({message: 'Bio is required'})
    @Length(0, 255, { message: 'Bio must be between 2 and 12 characters' })
    content: string;
    @Column({type: 'longtext', nullable: true})
    image : string;
    @ManyToOne(() => User, (user) => user.id)
    @IsNotEmpty({ message: 'User is required' })
    user: User;
}