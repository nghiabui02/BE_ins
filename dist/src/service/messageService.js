"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const messages_1 = require("../entity/messages");
class MessagesService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find();
        };
        this.add = async (message) => {
            return await this.Repository.save(message);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.update = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(messages_1.Messages);
    }
}
exports.default = new MessagesService();
//# sourceMappingURL=messageService.js.map