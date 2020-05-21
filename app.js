import express from 'express';
import mongoose from 'mongoose';
import { mongoURI } from './database/config/keys';
import { Blog } from './database/models';

const
app     = express(),
port    = 3000;

//Connect req.body
app.use(express.json());

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    Blog.find({}, (err, result) => {
        res.status(200).json({
            data: result
        });
    });
 });

app.post('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');  
    //create blog
    const newBlog = new Blog({
       title: req.body.title,
       content: req.body.content,
       author: req.body.author, 
       img: req.body.img,
       tags: req.body.tags
    });
    //save blog
    newBlog
       .save()
       .then(data => {
          res.status(200).send(data);
       })
       .catch(err => {
          res.status(400).send('unable to save to DB');
       });
 });

//Connect to DB
mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('connected to DB'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));