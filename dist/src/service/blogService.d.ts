import { Blog } from "../entity/blogs";
import { FindOptionsWhere, ObjectId } from "typeorm";
declare class BlogService {
    private Repository;
    constructor();
    getAll: () => Promise<Blog[]>;
    add: (blog: any) => Promise<any>;
    delete: (id: string | number | string[] | Date | ObjectId | number[] | Date[] | ObjectId[] | FindOptionsWhere<Blog>) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findById: (id: any) => Promise<Blog[]>;
}
declare const _default: BlogService;
export default _default;
