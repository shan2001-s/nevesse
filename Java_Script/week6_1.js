
console.log("Hello..... This is External Js");

{ 
    var name="Host MM";
    const phone="0959424103705"
    let email="admin@hostmm.tech";

    console.log("Email add is"+email);

    console.log("phone number is"+phone);
}
console.log("welcome to"+name);


var address="Mandalay";
document.getElementById('div1').innerHTML=`<h3> ${name}</h3>`;

var age="23";
var simming_status=false;

document.getElementById('div2').innerHTML=`swimming status ${simming_status}`;

var colors=["white","red","yellow"];
console.log(colors[0]);
console.log(colors.length);

/*document.getElementById('div1').classList.remove("bg-primary");
var color=colors[1];
var div1= document.getElementById("div1");
div1.classList.add(color);

var h=hidden_status=[true,false];
div1=document.getElementById('div1');
div1.classList.add(h[1]);

var employe=new Array("div","ma","joh");
console.log(employe[0]);

var check=new Array("hide","appear");

var ha=hidden1_status=[true,false];
div1=document.getElementById('container');
div1.classList.remove(ha[0]);

var h=hidden_status=[true,false];
c=document.getElementById('container');
c.classList.add(h[0]);*/

