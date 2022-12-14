const express = require('express');
const { json } = require('express');
const app = express();
const cors = require('cors');
const { UserRouter, PhotoRouter, SocialMediaRouter, CommentRouter } = require('./routers');

if(process.env.NODE_ENV == 'development'){
    const dotenv = require('dotenv');
    dotenv.config();
}

app.use(cors())
app.use(json())

app.use('/users',UserRouter);
app.use('/photos',PhotoRouter);
app.use('/socialmedias',SocialMediaRouter);
app.use('/comments',CommentRouter);
app.use('/',(req,res) =>{
    res.send('<h1>Welcome to MyGram</h1>')
});

app.listen(process.env.PORT,() => {
    console.log("Server dah jalan di http://localhost:"+process.env.PORT || 5000);
})