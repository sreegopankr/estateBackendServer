import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import testRouter from "./routes/test.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auths",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/test",testRouter);
app.use("/api/chats",chatRouter);
app.use("/api/messages",messageRouter);


app.listen(8800,()=>{
    console.log("Server is running...");
})