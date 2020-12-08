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
//     li.addEventListener("click",()=>{
//         renderNewBlog(li.id)
//     }) = renderNewBlog;
//     ul.appendChild(li);
//   });

//     div.classList.add("side-content");
//     const ul = document.createElement(ul);
//     // const arr = [links];
//     links.forEach(e,i){
//         document.getElementById("side-content").innerHTML

//     }
//     function myfunt()
//     // ul.innerHtml = links;
//     // div.appendChild(ul);
//     // return div;
// }
