import { Blogs } from "./data.js";
import { blogImage } from "./components/imgfnct.js";
import { blogTitle } from "./components/blogTitle.js";
import { blogContent } from "./components/blogContent.js";
import { sideContent } from "./components/sideContent.js";
window.onload = () => {
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(Blogs[0].imageUrl);
  console.log(blogImageDiv);
  blogDiv.appendChild(blogImageDiv);

  const blogTitleDiv = blogTitle(Blogs[0].title);
  console.log(blogTitleDiv);
  blogDiv.appendChild(blogTitleDiv);

  const blogContentDiv = blogContent(Blogs[0].content);
  console.log(blogContentDiv);
  blogDiv.appendChild(blogContentDiv);

  const asideDiv = document.getElementById("side-content");
  asideDiv.appendChild(sideContent(Blogs[0].links));
};
