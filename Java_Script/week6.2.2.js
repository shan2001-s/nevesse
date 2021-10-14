

var tf=100;
var tc;


function changef(tf){
    return (tf-32)*5/9;
}
console.log(changef(tf).toFixed(3));

document.getElementById('result').innerText+=changef(tf).toFixed(3)+ " is tf";
//document.getElementById('result1').innerText=changef(tf).toFixed(3)+ " is tf";




function changet(kyat){
   // document.getElementById('rr_b').innerText= kyat+200;
}
changet(1000);

var us=200;
function changt(us){
    return us+200;
}
console.log(changt(us));

var room=35000;
var no_room=5;
var percent=10/100;
var total;

function total(){
    return (35000*(1-10/100)*5);
}
console.log(total());

var stu={
    name: "Zaw Zaw",
   bith:2001,
    add: "Mdy",
    age: function(){
        return 2021-this.bith;
    }
}
console.log(stu.name)
console.log(stu.age())

var course={
    name:"web  development",
    duration:"3 Months",
    fees: 30000,
    no_seat : 8,
    available_seat: function(){
        return 10-this.no_seat;
    }
}
console.log(course)
console.log(course.available_seat())

function hotel(name,add){
    this.name=name;
    this.add=add;
}
var aa=new hotel("aser","Mdy");
var bb=new hotel("black","Ygn")
console.log(bb.name)

function medicion(name,type,qty,price,){
    this.name=name;
    this.type=type;
    this.qty=qty;
    this.price=price;
}
var cc=new medicion("Shwe","medicion",3000,1500)

var dd=new medicion("Por","rice",200,52000)

console.log(cc)
console.log(cc.qty*cc.price);
console.log(dd)

console.log(window.innerHeight);
console.log(window.screen.height);

var jj="khing";
console.log(jj.toUpperCase());
console.log(jj.indexOf('g'))

arr=["apple","orange",100,10,20,"banabar"]
for(a in arr)
document.write(arr[a])
document.write("<br>")
document.write(arr.pop());
document.write("length of arr", arr.length,"<br>","<br>")

var xx=prompt("Enter number");
document.getElementById('result1').innerText+=("2*"+xx+"="+2*xx+"<br>");
document.write("2*",xx,"=",2*xx+"<br>")
document.write("2 + Num('3.4')=", 2+3.4,"<br>");



if( xx<40){
    document.write("Your mark: ",xx,"<br>","fail","<br>")
}
else{
    document.write("Your mark :",xx,"<br>","Pass","<br>")
}

mark="A";
if(mark>=0 && mark<40)
{
    document.write("<br> your mark is : ",mark,"<br>fail<br>");
}
else if(mark>=40 && mark<65)
{
    document.write("<br> your mark is : ",mark,"<br>pass<br>");
}
else if(mark>=65){
    document.write("<br> your mark is : ",mark,"<br>D<br>");
}
else if(mark=="A"){
    document.write("This is A")
}





