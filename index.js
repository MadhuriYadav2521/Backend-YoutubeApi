console.log("working");
import morgan from "morgan";
import express from "express"
import router from "./routes/AllYoutubeRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);


app.listen(8001, () => console.log("working on port 8001"));