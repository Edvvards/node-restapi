import express from 'express';
import blogController from '../controllers/blogController';

const blogRouter = express.Router();

blogRouter.get('/', blogController.getAllBlogs);
blogRouter.post('/', blogController.postBlog);
blogRouter.delete('/:id', blogController.deleteBlog);
blogRouter.put('/:id', blogController.updateBlog);

export default blogRouter;