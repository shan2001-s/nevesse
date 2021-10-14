var form_tasks=document.querySelector("#tasks");
var aa=document.querySelector("#newtask").value="";

//even submit handler
/*form_tasks.onsubmit=()=>{
    var newtask=document.querySelector("#newtask").value;
    var li=document.createElement("li");
    li.innerHTML=newtask;
    document.querySelector("#tasklist").appendChild(li);
    aa.value="";

 
    return false;
}*/
form_tasks.onsubmit=()=>{
  var newtask=document.querySelector("#newtask").value;
  var li=document.createElement("li");
  li.innerHTML=newtask;
  document.querySelector("#tasklist").appendChild(li);
  console.log(newtask.length);
  aa.value="";


  return false;
}




