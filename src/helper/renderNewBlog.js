import { findBlogById } from "./findBlogById.js";
import { blogImage } from "../components/imgfnct.js";
import { blogTitle } from "../components/blogTitle.js";
import { blogContent } from "../components/blogContent.js";
import { sideContent } from "../components/sideContent.js";
export const renderNewBlog = (blogId) => {
  const blogObject = findBlogById(blogId)[0];
  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  rootDiv.appendChild(blogImage(blogObject.imageUrl));
  rootDiv.appendChild(blogContent(blogObject.content));
  const asideDiv = document.getElementById("side-content");
  asideDiv.innerHTML = "";
  asideDiv.appendChild(sideContent(blogObject.links));
};
