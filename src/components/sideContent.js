import { renderNewBlog } from "../helper/renderNewBlog.js";
export const sideContent = (links) => {
  const ul = document.createElement("ul");
  links.forEach((link) => {
    let li = document.createElement("li");
    li.innerHTML = link.title;
    li.id = link.id;
    li.addEventListener("click", () => {
      renderNewBlog(li.id);
    });
    ul.appendChild(li);
  });
  return ul;
};
