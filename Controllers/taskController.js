import jwt from "jsonwebtoken"
import { userModel,taskModel } from "../Models/user.js";
export const create =async(req,res)=>{
    let {title,description}=req.body;
    let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
    let user = await userModel.findOne({email:decoded.email}).select("-password");
     const newTask = await taskModel.create({
      title,
      description,
      user: user._id
    });

    // Push task id into user's tasks array
    user.tasks.push(newTask._id);
    await user.save();

    // Populate tasks when sending response
    const updatedUser = await userModel.findById(user._id).populate("tasks");

    res.render("profile", { user: updatedUser });
}
export const Complete=async(req,res)=>{
    let task = await taskModel.findOne({_id:req.params.id})
    let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
    let user = await userModel.findOne({email:decoded.email}).select("-password").populate("tasks");
    task.status = "completed";
    await task.save();
    res.render("profile",{user})

}
export const Edit=async(req,res)=>{
    let task = await taskModel.findOne({_id:req.params.id});
    let decoded = jwt.verify(req.cookies.token,process.env.JWT_KEY);
    let user = await userModel.findOne({email:decoded.email}).select("-password");
    res.render("edit",{task,user})
}
export const Update = async (req, res) => {
  try {
    let { title, description } = req.body;

    await taskModel.updateOne(
      { _id: req.params.id },
      { $set: { title, description } }
    );


    res.redirect("/user/profile");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const Delete = async (req, res) => {
  try {
    const taskId = req.params.id;

    // 1. Delete the task itself
    const result = await taskModel.deleteOne({ _id: taskId });

    // 2. Remove task reference from all users
    await userModel.updateMany(
      { tasks: taskId },
      { $pull: { tasks: taskId } }
    );
    cleanupTasks();
    res.redirect("/user/profile");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const cleanupTasks = async () => {
  try {
    const users = await userModel.find();

    for (let user of users) {
      // Get only IDs that still exist in task collection
      const validTaskIds = [];

      for (let taskId of user.tasks) {
        const exists = await taskModel.exists({ _id: taskId });
        if (exists) validTaskIds.push(taskId);
      }

      // If the array changed, update the user
      if (validTaskIds.length !== user.tasks.length) {
        user.tasks = validTaskIds;
        await user.save();
      }
    }
  } catch (err) {
    console.error("Error during cleanup:", err);
  }
};
