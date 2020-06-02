import { Blog } from '../database/models';

class blogsController {
    static getAllBlogs(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        Blog.find({}, (err, result) => {
            res.status(200).json({
                data: result
            });
        });
    }

    static getBlog(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        Blog.findById(req.params.id, (err, result) => {
            res.status(200).json ({
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
        Blog.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
            if(err) return next(err);
            res.json(result)
        });
    }

}

export default blogsController;