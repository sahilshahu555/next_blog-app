"use server"

import { connectToDb } from "../database/db";
import { Blog, User } from "../models/models";
// import { unstable_noStore as noStore } from "next/cache";


// Blogs Server Actions

export const getBlogs = async () => {
  try {
    connectToDb();
    const blogs = await Blog.find();
    return blogs;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blogs!");
  }
};

export const getBlog = async (slug) => {
  try {
    connectToDb();
    const blog = await Blog.findOne({ slug });
    return blog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blog!");
  }
};


// User Server Actions

export const getUser = async (id) => {
  // noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};