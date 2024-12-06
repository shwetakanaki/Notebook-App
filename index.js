import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

// .ENV CONFIG
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://174.129.177.110:${port}`);
});


// CONNECTION WITH DATABASE & RUN SERVER
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });
