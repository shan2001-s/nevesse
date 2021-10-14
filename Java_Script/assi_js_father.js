var radios=document.querySelectorAll("input[type='radio'][name='person_type']");

var ee="employee"
var ss="student"

radios.forEach(radios=>radios.addEventListener("change",function(){
    console.log(radios.value);
    if(radios.value==ss){
      //document.getElementById("map1").innerHTML=`<input type="text" class="form-control" id="emp_id" placeholder="Ente Emp ID" value="Hello World">`;
      document.getElementById("map1").innerHTML=`
    
      <label for="inputtext" class="form-label">Name<input type="text" class="form-control" id="inputtext"></label><br>
      <label for="inputtext" class="form-label">NRC<input type="text" class="form-control" id="inputtext"></label><br>
      <label for="inputtext" class="form-label">phone<input type="text" class="form-control" id="inputtext"></label><br>
      <label for="inputtext" class="form-label">Address<input type="text" class="form-control" id="inputtext"></label><br>
    
        `
     
    }
    else if(radios.value==ee){
        //document.getElementById("map1").innerHTML=`<input type="text" class="form-control" id="emp_id" placeholder="Ente Emp ID" value="Hello World">`;
        document.getElementById("map1").innerHTML=`
      
        <label for="inputtext" class="form-label">Name<input type="text" class="form-control" id="inputtext"></label><br>
        <label for="inputtext" class="form-label">NRC<input type="text" class="form-control" id="inputtext"></label><br>
         `
       
      }

}))



var radios2=document.querySelectorAll("input[type='radio'][name='sem_type']");

var aa=1
var bb=2

radios2.forEach(radios2=>radios2.addEventListener("change",function(){
    console.log(radios2.value);
    if(radios2.value==aa){
    
      document.getElementById("show1").innerHTML=`
        <br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Myanmar
        </label><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            English
        </label><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Math
        </label><br>
    
        `
     
    }
    else if(radios2.value==bb){
        document.getElementById("show1").innerHTML=`<input type="text" class="form-control" id="emp_id" placeholder="Ente Emp ID" value="Hello World">`;
        document.getElementById("show1").innerHTML=`
        <br><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Physic
        </label><br>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
           Chemistry
        </label><br>
        
         `
       
      }
    
    
   // document.getElementById("map").innerHTML=`<button> <input type="text" class="form-control" id="emp_id" placeholder="Enter ${radios.value} ID"></button>`;
}))

console.log("hello");
console.log(radios.value);