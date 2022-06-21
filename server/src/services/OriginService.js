const repositoryService = require("./RepositoryService");
const baseModel = require("../models/Origin");

class OriginService extends repositoryService {
    constructor() {
        super(baseModel);
    }
    

}

module.exports = new OriginService();