/*var form_tasks=document.querySelector("#tasks");
//var aa=document.querySelector("#newtask");


form_tasks.onsubmit=()=>{
  var newtask=document.querySelector("#newtask").value;
  var newpass=document.querySelector("#newpass").value;
  
  var li=document.createElement("li");
  var p=document.createElement("p");
  li.innerHTML=newtask;
  p.innerHTML=newpass;
  document.querySelector("#tasklist");
  document.querySelector("#taskpass");
  console.log(newtask.length);
  if (newtask.length<5){
    document.getElementById("tasklist").innerText="UserName more than 5";
    }
        else{
            document.getElementById("tasklist").innerText+=("User Name :"+newtask);
        }
    if (newpass.length<8){
        document.getElementById("taskpass").innerText="Password more than 8";
    } 
        else{
            document.getElementById("taskpass").innerText+=("Password :"+newpass);
        } 

  console.log(newpass.length);
 // document.querySelector("#newtask").value="";


  return false;
}*/


//1.parmeter("eventname",callback function)
//2.event.preventDefault();
var form_tasks=document.querySelector("#tasks");//element
var username=document.querySelector("#newtask");
var password=document.querySelector("#newpass");

form_tasks.addEventListener("submit",(e)=>{
   
    var uname=username.value;// input text
   
    var pw=password.value;
    if(uname.length<5){
        document.querySelector("#name").innerHTML="user name must be more than 5"
    }
    if(pw.length<8){
        document.querySelector("#pass").innerHTML="password must be more than 8"
    }
    e.preventDefault();
});

var reset=document.querySelector("#reset");
reset.addEventListener("click",(e)=>{
    username.value="";
    password.value="";
    document.getElementById("zz").style.display = "none";
    e.preventDefault();

});
var aa=document.querySelector("#aa")
var bb=document.querySelector("#bb");
bb.addEventListener("click",(c)=>{
   aa.value="";
   console.log(aa.value);
   document.getElementById("aa").innerText=aa.value;
    c.preventDefault();
});

/*username.addEventListener("focus",(e)=>{
document.querySelector("#name").innerHTML="please add username of at least 5 "
});

username.addEventListener("blur",(e)=>{//တခြားဘောက်ကိုထွက်သွားတဲ့ချိန် blur
    document.querySelector("#name").innerHTML="You must add username"
    });

password.addEventListener("focus",(e)=>{
    document.querySelector("#pass").innerHTML="Please add password at least 8"
})

password.addEventListener("blur",(e)=>{
    document.querySelector("#pass").innerHTML="You must add password"
})*/

//on change function
var radios=document.querySelectorAll("input[type='radio'][name='person_type']");
//console.log(radios);
//console.log(radios[0]);
var ss="student"
var ee="employee"

radios.forEach(radios=>radios.addEventListener("change",function(){
    console.log(radios.value);
    if(radios.value==ss){
      document.getElementById("map1").innerText+=("hello");
     
      console.log("aaaa");
    }
    else if(radios.value==ee){
        document.getElementById("map2").innerText+=("helloss");
       
        console.log("sss");
      }
    
    
   // document.getElementById("map").innerHTML=`<button> <input type="text" class="form-control" id="emp_id" placeholder="Enter ${radios.value} ID"></button>`;
}))

console.log("hello");
console.log(radios.value);

/*.addEventListener("change",()=>{
if(document.querySelector("#employee").checked)
{
    console.log(document.querySelector("#employee").value);
}
    
});*/

var description=document.querySelector("#description");
description.addEventListener("keyup",()=>{
    //console.log(description.value)
    var count=180-description.value.length;
    document.getElementById("message").innerHTML="Character left"+count;

});

description.addEventListener("keypress",(e)=>{//keypress ကတစ်ခုလျော့ယူ
    console.log(description.value)
    console.log(e.keyCode)
})
description.addEventListener("keydown",()=>{//keypress ကတစ်ခုလျော့ယူ
   // console.log(description.value)
})

var today=new Date();
console.log(today.getFullYear()+"/"+today.getMonth()+1);

var bd=new Date("2001/5/2");
var difference=today-bd;
//console.log(Math.floor(difference/(365*24*60*60*1000)))
console.log((difference/(365*24*60*60*1000)))








