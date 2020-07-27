const express = require('express');
const connectDB = require('./config/db');
connectDB();
const app = express();



const users = require('./routes/users');
const profile = require('./routes/profile');
const posts = require('./routes/posts');
app.use(express.json({ extended:false }));;
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

app.get('/',(req,res) => {
    res.send("server is running successfully");
})


const PORT = process.env.PORT||5000;

app.listen(PORT,()=> console.log("Server is running on port 500"));
