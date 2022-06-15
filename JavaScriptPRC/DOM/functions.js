// Finding HTML elements

document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("tag");

//Changing HTML elements

element.innerHTML="";
element.attribute=new value 
element.style.property=new style;
element.setAttribute(attribute,value);

//Adding and Deleting elements
document.createElement(element);
document.removeChild(element);
document.appendChild(element);
// document.replaceChild(new,old);
document.write(text);

//Adding event handle
document.getElementById("id").onclick=()=>{

}

//Finding HTML objects
document.anchors;
document.baseURI;
document.body;
document.cookie;
document.doctype;
document.documentURI;
document.domain;
document.images;
document.forms;
document.head;
document.links;
document.title;
document.URL;
document.readyState;