import { User } from "./user";
import { Blog } from "./blogs";
export declare class Comment {
    id: number;
    content: string;
    date: string;
    user: User;
    blog: Blog;
}
