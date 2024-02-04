import express, { json } from "express";
import dotenv from "dotenv";
import { getIPAddress } from "./config/getIpAddress.js";
import colors from "colors";
import { mongoDB_connect } from "./config/mongoDB.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

mongoDB_connect(process.env.MONGODB_URI);
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => [
  res.send({
    message: "Api is runing...",
    success: true,
  }),
]);

app.listen(port, () => {
  console.log(
    `Your server runing on : 
  Local : http://127.0.0.1:${port}
  Network : http://${getIPAddress()}:${port}
  `.bold
  );
});
