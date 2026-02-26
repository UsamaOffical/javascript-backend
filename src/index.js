import express from "express";
import "dotenv/config";
import connectDB from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

 connectDB().then(()=>{
    app.listen(PORT, ()=>{
      console.log(`server running on this address http://localhost:${PORT}`);
    });
  });

