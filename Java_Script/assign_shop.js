var shop=document.querySelector("#shop");

var super1=document.querySelector("#super1");
var price=document.querySelector("#price");
console.log(shop.children.document);
console.log(price.value);


var start_element=document.querySelector("li:nth-child(1)");
console.log(start_element+'aaaa');

console.log(start_element.parentNode);

var del=document.querySelectorAll("#del");

del.forEach(del=>{
    del.addEventListener("click",function(){
    var parent=del.parentNode;
    //document.querySelector("#list").innerHTML="total :"+parent;
     console.log(parent);
    
   
     super1.remove();
        //document.getElementById("more").innerHTML+="hello <br>";
     
        console.log("aaaa");
    } )
  
});
var add=document.querySelector("#add");
add.addEventListener("click",function () {
    //var content = document.getElementById('super1');
   
      
    
    var p = document.createElement('p')
    p=content;
     
    
      //  console.log(content);
        document.getElementById("super1").innerText=p;
        console.log(p)
        content.append();   
       
});






function medicion(name,type,price,discount){
    this.name=name;
    this.type=type;
    
    this.price=price;
    this.discount=discount;
}
var cc=new medicion("pan","medicion",1500,10)

var dd=new medicion("ruler","rice",52000,15)

console.log(cc)
console.log(cc.qty*cc.price);
console.log(dd)
document.write(cc.name,cc.price);

var shop=document.querySelector("#shop")
var pen=document.querySelector("#pen");
var qty=document.querySelector("#qty");
var subtotal=document.querySelector("#subtotal")
var ruler=document.querySelector("#ruler");
var item ;

pen.addEventListener("click",()=>{
   
   item= console.log(pen.value)
   document.getElementById('item').innerText="Name :"+cc.name;
   document.getElementById('price').innerText=cc.price;
   document.getElementById('discount').innerText=cc.discount+"%";
   document.getElementById('subtotal').innerText=(qty.value*cc.price)*((100-cc.discount)/100);
  


   

});



ruler.addEventListener("click",()=>{
   
    item= console.log(ruler.value)
    document.getElementById('item').innerText="Name :"+dd.name;
    document.getElementById('price').innerText=dd.price;
    document.getElementById('discount').innerText=dd.discount+"%";
    document.getElementById('subtotal').innerText=(qty.value*dd.price)*((100-dd.discount)/100);

  

});








var add_row=document.querySelector("#add_row");
var big=document.querySelector("#container");
add_row.addEventListener("click",function(){

    var inputName, inputValue, x, content, p;
    
    content = document.getElementById('content');
      
    
    p = document.createElement('p')

    inputValue = document.createElement('input');
  
    x= document.createElement('input');
    x.type = 'button';
    x.value = 'x';
    
    x.addEventListener("click",function(){
        var parent=content.parentNode;
       
         console.log(parent);
        
       
         p.remove(parent);
    });

    inputName= document.createElement('input');
    inputName.type='button';
    inputName.value="Item Name";
  
    
  
    inputName.addEventListener("click",function(){
    });
    
  
      
  


    content.append(p);
  
    p.append(inputName);
   
    p.append(inputValue);
   
    p.append(x);
    
});








