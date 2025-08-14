import express, { urlencoded } from "express";
import ConnectDB from "./db/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
ConnectDB();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views"); // optional if you keep views folder in root

app.get("/",(req,res)=>{
    res.render("index");
});
app.use("/user",userRoutes);
app.use("/tasks",taskRoutes);
app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on http://localhost:${process.env.PORT || 3000}`);
});