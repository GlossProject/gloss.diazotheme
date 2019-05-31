//definitions
let nav_sidebar = document.querySelector('aside.portlet.portletNavigationTree');

let toc_draw_handle = document.createElement("span");                 // Create a <li> node
toc_draw_handle.classList.add="toc-draw-handle";
let textnode = document.createTextNode(">");         // Create a text node
toc_draw_handle.appendChild(textnode);
nav_sidebar.appendChild(toc_draw_handle);  

toc_draw_handle.style.position = "absolute";
toc_draw_handle.style.top = 0;
toc_draw_handle.style.right = "-20px";
toc_draw_handle.style.background = "#56ccf2";
toc_draw_handle.style.color = "white";
toc_draw_handle.style.fontWeight = "bold";
toc_draw_handle.style.padding = "2px 4px";
toc_draw_handle.style.cursor = "pointer";


nav_sidebar.style.position = "absolute"
nav_sidebar.style.width = "280px"
nav_sidebar.style.left = "-280px"

let sidebar_state = "want-close";
toc_draw_handle.addEventListener('click', function(event){

  if (sidebar_state === "want-open"){
           sidebar_state = "want-close";
       } else {
           sidebar_state = "want-open";
       }
   if (sidebar_state === "want-close"){
           // close draw
             nav_sidebar.style.left = "-280px";
             nav_sidebar.position = "absolute"; 
             toc_draw_handle.innerHTML = ">";
           }     
         else {
              // open draw
             
             nav_sidebar.style.left = "0px";
             nav_sidebar.position = "relative";
             toc_draw_handle.innerHTML = "x";
         }
       
    },false);
