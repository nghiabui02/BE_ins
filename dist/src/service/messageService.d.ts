declare class MessagesService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (message: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: MessagesService;
export default _default;
