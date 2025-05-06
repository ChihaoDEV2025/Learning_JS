const express = require("express"); //Install npm -i express --save-dev
const app = express();
//

const userRouter = express.Router();
userRouter.get("/about", (req, res) => {
  res.send("User About Page");
});

app.use("/user", userRouter);
