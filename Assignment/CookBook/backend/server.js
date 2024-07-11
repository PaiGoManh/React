const express = require("express")
const app = express();
const {mongoose} = require('mongoose')
const authRoutes = require('./Routes/auth')
const recipeRoutes = require('./Routes/recipe')
const cors = require('cors')

app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

app.use('/',authRoutes);
app.use('/',recipeRoutes);

mongoose.connect('mongodb://localhost:27017/Cookbooknew');

const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
  });
  
  database.once("connected", () => {
    console.log("Mongodb Database Connected");
  });

  Port = 5000;

  app.listen(Port,()=>{
    console.log(`Server connected in ${Port}`)
  })

