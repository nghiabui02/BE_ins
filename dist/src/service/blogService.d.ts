declare class BlogService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (blog: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: BlogService;
export default _default;
