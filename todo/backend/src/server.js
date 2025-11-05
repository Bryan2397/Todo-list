import express from "express";
import dotenv from "dotenv";
dotenv.config();
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";



import rateLimiter from "./middleware/rateLimiter.js";


const app = express();
const PORT = process.env.PORT || 5001;


// What is an Endpoint?
// An endpoint is a combination of a URL + HTTP nethod that lets the client 
// interact with a specific resource.


app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
 app.listen(PORT, () =>{
    console.log("Server started on PORT:", PORT);
 });
});






// mongodb+srv://dbUser:<db_password>@cluster0.y29of4q.mongodb.net/?appName=Cluster0