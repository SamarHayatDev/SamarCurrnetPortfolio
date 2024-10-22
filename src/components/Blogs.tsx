import React from "react";
import { Blog } from "@/types/blog";
import { BlogClient } from "./BlogClient";

export const Blogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      {blogs.map((blog, index) => (
        <BlogClient key={blog.slug} blog={blog} index={index} />
      ))}
    </div>
  );
};
