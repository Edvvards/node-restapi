import { Blog } from '../database/models';
import e from 'express';

class blogsController {
    static getAllBlogs(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        Blog.find({}, (err, result) => {
            res.status(200).json({
                data: result
            });
        });
    }

    static postBlog(req, res) {
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
    }

    static async deleteBlog(req, res) {
        res.header('Access-Control-Allow-Origin', '*');  
        await Blog.findByIdAndRemove(req.params.id)
          res.status(200).json({
            message: "blog successfully deleted"
        })
    }

    static updateBlog(req, res) {
        res.header('Access-Control-Allow-Origin', '*');  
        let blog = Blog.findByIdAndUpdate(req.params.id, (err, result) => {
            blog.title = req.body.title
            blog.content = req.body.content
            blog.author = req.body.author
            blog.img = req.body.img
            blog.tags = req.body.tags
            blog.save()
        })
    }
}

export default blogsController;