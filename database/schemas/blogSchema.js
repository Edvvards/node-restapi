import { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    img: { 
        type: String, 
        required: true 
    },
    tags: { 
        type: String, 
        required: true 
    }
},
    {
        timestamps: { 
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
        }
    }
);

export default blogSchema;