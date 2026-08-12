import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    Language: String,
    City: String,
    isManager: Boolean
  });
export const Employee = mongoose.model('Employee', employeeSchema);
  
  // module.exports = Employee >> for type "common js"
