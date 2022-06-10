import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller";
import router from "./user-routes";
const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);

export default blogRouter;