import express from "express";
import { fetchAllBlogs, deleteBlog, updateBlogById, findBlogById } from "../controllers/blog/blog.controller.js";// BLOG CONTROLLERS

const Router = express.Router();

/**
 * Home Route
 */
Router.get("/", defaultController)
 
/**
 * Delete a user(s)
 */
.delete("/delete/:id", deleteBlog)

/**
 * Get all user(s)
 */
.get("/users", fetchAllBlogs)

/**
 * Update user(s)
 */
.put("/update/:id", updateBlogById)
/**
 * Find 1 user by id
 */
.get("/user/:id", findBlogById)
	

export default BlogRouter;
