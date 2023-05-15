import  express  from "express";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import Razorpay from "razorpay"


dotenv.config();


// var base64encodedData = Buffer.from(user + ':' + password).toString('base64');


const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var user = process.env.API_KEY;
var password = process.env.API_SECRET;

app.post("/postOrder",async (req,res)=>{
        try {
            // console.log(req)
            const {amount,currency,receipt}=req.body;
         
            var instance=new Razorpay({
                key_id:user,key_secret:password
            })
            const body = {
                amount: amount*100,

                currency: currency,
                receipt: receipt,
            };
            const response=await instance.orders.create(body);
            res.status(200).json({...response,key:process.env.API_KEY});
        } catch (error) {
            console.log(error)
            res.status(500).json({error});
        }
})

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is running at PORT 3005")
})