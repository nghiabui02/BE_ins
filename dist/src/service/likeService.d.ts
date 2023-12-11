declare class LikeService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (blog: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByDate: (date: any) => Promise<any>;
}
declare const _default: LikeService;
export default _default;
