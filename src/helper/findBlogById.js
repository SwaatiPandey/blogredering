import { Blogs } from "../data.js";
export const findBlogById = (blogId) => {
  const blogObject = Blogs.filter((blog) => {
    return blog.id == blogId;
  });
  return blogObject;
};
