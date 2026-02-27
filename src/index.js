
import { app } from "./app.js";
import "dotenv/config";
import connectDB from "./database/db.js";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world")
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
