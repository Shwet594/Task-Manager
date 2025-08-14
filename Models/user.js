import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { 
    type: String, 
    enum: ["pending", "in-progress", "completed"], 
    default: "pending" 
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

export const taskModel = mongoose.model("Task", taskSchema);
const userSchema =mongoose.Schema({
    name:String,
    email:String,
    password:String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
},{ timestamps: true });
export const userModel= mongoose.model("User",userSchema);