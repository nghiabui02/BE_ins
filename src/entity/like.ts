import {Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import {User} from "./user";
import {Blog} from "./blogs";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => User, (user) => user.id)
    user: User;
    @ManyToOne(() => Blog, (blog) => blog.id)
    blog: Blog;
}