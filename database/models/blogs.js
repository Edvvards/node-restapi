import mongoose from 'mongoose';
import blogSchema from '../schemas/blogSchema';

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;