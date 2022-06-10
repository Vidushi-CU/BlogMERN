import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

const app=express();
app.use(express.json());

app.use("/api/user",router); // http://localhost:9000/api/user/logon
app.use("/api/blog",blogRouter)
mongoose.connect('mongodb+srv://admin:26bgtqdiz5CusI5v@cluster0.ldkmw.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(9000)).then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err)); 