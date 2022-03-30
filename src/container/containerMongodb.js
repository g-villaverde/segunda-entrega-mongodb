import mongoose from "mongoose";



class MongoContainer {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, new mongoose.Schema(schema))
    }



}