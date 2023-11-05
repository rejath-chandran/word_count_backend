import mongoose from "mongoose";

const insightSchema = new mongoose.Schema({
    userid:String,
    DomainName: String,
    WordCount: Number,
    fav:Boolean
  });

export const insight=mongoose.model('insight',insightSchema) 