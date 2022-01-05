const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const BlogModel = require("./models/blogs");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://mrbad:mrbad@miblog-cluster.rrw8i.mongodb.net/miblog?retryWrites=true&w=majority");

app.get("/get-blogs", (req, res) => {
    BlogModel.find({}, (err, result) => {
        if (err) {
            res.status(502).json(err);
        } else {
            res.status(200).json(result);
        }
    })
})

app.get("/get-blog-by-id/:id", async (req, res) => {
    const blogId = req.params.id;
    let result = await BlogModel.findById(blogId);
    console.log(result)
    res.json(result)
})

app.get("/get-shortblogs", (req, res) => {
    BlogModel.find({}, { postTitle: 1 }, (err, result) => {
        if (err) {
            res.status(502).json(err);
        } else {
            res.status(200).json(result);
        }
    })
})

app.post("/add-blog/:id", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const blogId = req.params.id;
    if (blogId == "-999") {
        const blog = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        console.log("new blog", blog)
        const newBlog = new BlogModel(blog);
        await newBlog.save();
        res.json(blog)
    } else {
        const blog = {
            ...req.body,
            updatedAt: new Date()
        }
        console.log("update blog content", blog)
        // await newBlog.replaceOne({_id : blogId}, blog)
        await BlogModel.findOneAndUpdate({ "_id": blogId }, blog, { upsert: true })
        res.json(blog)
    }
})


app.post("/update-likes", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const blog = {
        ...req.body,
        updatedAt: new Date()
    }
    console.log("update likes in blog", blog)
    // await newBlog.replaceOne({_id : blogId}, blog)
    // var output = await BlogModel.findOneAndUpdate({ "postTitle": blog._id }, blog, { upsert: true });
    var output = await BlogModel.findByIdAndUpdate(blog.id, blog)
    console.log("output ", output)
    res.json(output)
})

app.post("/update-comments", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const blog = {
        ...req.body,
        updatedAt: new Date()
    }
    console.log("update comments in blog", blog)
    // await newBlog.replaceOne({_id : blogId}, blog)
    var output = await BlogModel.findByIdAndUpdate(blog.id, blog);
    console.log("output ", output)
    res.json(output)
})

const port = 3001;
app.listen(3001, () => {
    console.log("Server run at ", 3001);
})

