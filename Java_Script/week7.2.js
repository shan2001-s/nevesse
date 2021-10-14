var categories=document.querySelector("#categories");
console.log(categories.children);
//document.querySelector("#list").innerHTML="total :"+categories.parentNode;

var start_element=document.querySelector("li:nth-child(1)");
console.log(start_element);
//console.log(start_element.previousElementSibling);
//console.log(start_element.nextElementSibling);
console.log(start_element.parentNode);
//document.querySelector("#list").innerHTML=start_element.parentNode;

console.log(categories.children[1]);



/*var btn=document.querySelectorAll("#btn-delete");
btn.addEventListener("click",(e)=>{
    
    document.getElementById("list").style.display = "none";
    console.log(btn.value);
    e.preventDefault();

});*/

var btn=document.querySelectorAll("#btn-delete");

btn.forEach(btn=>{
    btn.addEventListener("click",function(){
  var parent=btn.parentElement
  document.querySelector("#list").innerHTML="total :"+parent;
   console.log(parent);
   
  categories.removeChild(parent);
    } )
  
});
