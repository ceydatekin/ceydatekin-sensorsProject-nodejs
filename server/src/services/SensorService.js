const repositoryService = require("./RepositoryService");
const BaseModel = require("../models/Sensor");

const AddData = require('../scripts/InfinityRecords/addData')

class SensorService extends repositoryService {
    constructor() {
        super(BaseModel);
    }
    // @Override 
    list(where) {
        return BaseModel.find(where || {}).populate({
            path : "origin_id",
            select : "title locationX locationY radius",
        });
    };
    //@Override 
    async create(data) {
        try {
            const savedData = await this.BaseModel(data).save();
            const recordObject = new AddData(savedData._id, savedData.records, savedData.reportInterval);
            await recordObject.addLog();
            return savedData;
        } catch (error) {
            console.log(error)
        } 
    }
}

module.exports = new SensorService();