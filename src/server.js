const express =require("express");
const bodyParser=require("body-parser");
const helmet=require("helmet");
const cors=require("cors");
const morgan = require("morgan");
const mongoose=require("mongoose");



const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
 const url="mongodb+srv://pksuser:GBVuA1bQSz97dDE3@cluster0.ojmum.mongodb.net/ecommerce?retryWrites=true&w=majority";
mongoose.connect(url)

app.get("/",function(req,res){
    res.json({"success":false,"message":"hello"});
});

const UserRoute=require("./routes/user_route");
app.use("/api/user",UserRoute);

const CategoryRoutes = require("./routes/category_route");

app.use("/api/category",CategoryRoutes)
const ProductRoutes = require("./routes/product_routes");
app.use("/api/product",ProductRoutes);
const PORT=5000;
app.listen(PORT,()=>console.log("server started ap Port : ${PORT}"));


//Users =>model , Routes and controllers