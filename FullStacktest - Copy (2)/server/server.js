require("dotenv").config();

const testbase=require("./db/DataBase")
const express = require('express')
const app = express()
const cors = require("cors")
//const bodyparser=require("body-parser");
const bcrypt = require("bcrypt")
const jwtGenerator = require("./utils/jwtgenerator.js")
const validInfo = require("./middleware/validInfo") 
const authorization = require("./middleware/authorization")  

app.use(cors());
app.use(express.json())

//get all customers
/*app.get("/home", async (req, res)=>{
    try{
        const customers = await db.query("SELECT * FROM testtable");
        console.log(customers);
        res.status(200).json({
            status: "success",
            results: customers.rowCount,
            data: {
                clients: customers.rows,
            }
        });
    }
    catch(err){
        console.log("unable to fetch customers")
    }
});

//get one customer
app.get("/:id", async (req,res) => {
    try{
        const customer = await db.query(
            "SELECT * FROM testtable where id = $1",[req.params.id]);
        console.log(customer.rows[0]);
    }
    catch(err){
        console.log("unable to fetch customer")
    }
});*/

//sign up
app.post("/sign-up",validInfo, async (req, res)=>{
    try { 
        const {name,email,password,jury,supervisor,admin} = req.body;

        //checking existance of user
        const user = await testbase.query("SELECT * FROM testtable where email = $1",[email]);
        if(user.rows.length > 0){
            return res.status(401).json({msg :"user already exists !"})
        }
            //encrypted password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        //add a user
        const newuser = await testbase.query(
            "INSERT INTO testtable (name, email, password , jury, supervisor, admin) VALUES ($1, $2, $3, $4, $5, $6)",
            [name, email, bcryptPassword, jury, supervisor, admin]);
        console.log("user added")
        res.json({msg :"user added"})
        /*const jwtToken = jwtGenerator(newuser.rows[0].id);

        return res.json({ jwtToken }); */
    }
    catch(err){
        console.log("unable to add customer")
        res.status(500).send({msg :"server error"})
    } 
});

app.post("/login",validInfo, async (req, res) => { 
  
    try {
      const {email, password} = req.body;
      const user = await testbase.query("SELECT * FROM testtable WHERE email = $1", [email]);
  
      if (user.rows.length === 0) {
        return res.status(401).json({msg :"user doesn't exist !"});
      }
   
      const validPassword = await bcrypt.compare(password,user.rows[0].password);
  
      if (!validPassword) {
        return res.status(401).json({msg :"wrong password !"});
      }
      else{
        const bool = await testbase.query("SELECT * FROM testtable WHERE email = $1", [email]);
        res.json({msg :"connected to account"});
        console.log(bool.rows[0].jury);
        console.log(bool.rows[0].supervisor);
        console.log(bool.rows[0].admin);
      }
    } 
    catch (err) {
      console.error(err.message);
      res.status(500).send({msg :"Server error"});
    }
});

app.get("/data", async (req, res) => { 
    try {
        const user = await testbase.query("SELECT * FROM testtable");
        res.json(user.rows)
        /*console.log(bool.rows[0].jury);
        console.log(bool.rows[0].supervisor);
        console.log(bool.rows[0].admin);*/
    }
    catch (error) {
        console.log(error);
    }
});

app.get("is-verify", authorization, async (req,res) => {
    try{
        res.json(false); 
    }
    catch(err){
        console.error(err.message);
      res.status(500).send({msg :"Server error"});
    }
});

//update info of a customer
/*app.put("/home/:id", async (req,res) => {
    try{
        await db.query("update testtable set email = $1 where id = $2",[req.body.email,req.params.id])
        console.log("update successful")
    }
    catch(err){
        console.log("unable to update customer's info")
    }
    
});

app.delete("/home/:id", async(req,res) => {
    try{
        await db.query("delete from testtable where id = $1",[req.params.id])
        console.log("customer deleted successfully")
    }
    catch(err){
        console.log("unable to delete customer")
    }
});

app.put("/home/:id", (req,res,next) => {
    console.log(req.params.id);
    console.log(req.body)
});

app.delete("/home", (req,res,next) => {
    res.status(204).json({
        status: "success"
    });
});*/

const port=process.env.PORT || 3001;
app.listen(port, () => { console.log(`Server started on port ${port}`); 
});

module.exports = app;
