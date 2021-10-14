

var div1=document.getElementById("div1");


for(var count=1; count<6; count++){
    //create element heading
    var heading=document.createElement("h"+count);
    heading.innerHTML="Heading "+count;
    console.log(heading);
    //check
    if(count%2==0){
        heading.style.color="#999";
       
    }
    else{
        heading.style.background="blue";
        heading.style.color="white";
    }

    div1.appendChild(heading);//append
}

var book=["Myanmar","English","Math","Science","Myanmar1","English1","Math1","Science"]
console.log(book[1])

var div1=document.getElementById("div2");


for(var count=1; count<8; count++){
    //create element heading
    var heading=document.createElement(book[count]);
    heading.innerHTML=book[count]+`<br>`;
   
    //check
    if(count%2==0){
        heading.style.color="#999";
        heading.style.background="yellow";
       
    }
    else{
        heading.style.background="blue";
        heading.style.color="white";
    }

    div1.appendChild(heading);//append
}


var card=document.createElement("div");
card.classList.add("card");

var image=document.createElement("img");
image.src="img/glass2.jpg";
image.classList.add("card-top-img");

card.appendChild(image);


var university={
    name:"Kentyky University",
    email:"admin@ku.com",
    phone:"+00001254",
    address:"US"
}


for(var prop in university){
    console.log(prop+":"+university[prop]);
    document.getElementById("uni_info").innerHTML+=prop+":"+university[prop]+`<br>`;
}
for(var a in university){
    console.log(a+":"+university[a]);
}
var card_body=document.createElement("div");
card_body.classList.add("card-body");

var h1=document.createElement("h1");
h1.classList.add("card-title");
h1.innerHTML=university.name;
card_body.appendChild(h1);
card.appendChild(card_body);

var universities=document.getElementById("universities")
universities.appendChild(card);

var loop=1;
while(loop<5)
{
    console.log("Round: "+loop);
    loop++;
}

loop=1;
var rounds=document.querySelector('#rounds')
do{
    var column=document.createElement("div");
    column.classList.add("col");
    column.style.backgroundColor="red";
    column.innerHTML="Lorem........."
    rounds.appendChild(column);
    loop++;
   
}while(loop<5);








