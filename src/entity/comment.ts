import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import {User} from "./user";
import {Blog} from "./blogs";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:"text"})
    content: string
    @Column({type:"date"})
    date:string

    @ManyToOne(() => User, (user) => user.id)
    user: User;
    @ManyToOne(() => Blog, (blog) => blog.id)
    blog: Blog;
}
