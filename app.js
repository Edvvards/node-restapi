import express from 'express';
import mongoose from 'mongoose';
import { mongoURI } from './database/config/keys';
import { blogRouter } from './routes';

const
app     = express(),
port    = 3000;

//Connect req.body
app.use(express.json());

//Mount routes
app.use('/api/blog', blogRouter);

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