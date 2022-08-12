/*const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

const port=process.env.PORT || 3001;
app.listen(port, () => { console.log(`Server started on port ${port}`); 
});
