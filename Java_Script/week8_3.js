var regexp=/hello/gi //'g' mean: all hello are replaced //'i' mean: all hello and Hello are replaced
var greeting="Hello  world . hello hello"


console.log(regexp.test(greeting))
console.log(regexp.exec(greeting))

//regexp=/is/
console.log(regexp.test(greeting))

console.log(greeting.replace(regexp,"kaing"))

var phone=/ /gi
var phone_num="+95 9 404060377";

console.log(phone_num.replace(phone,"+"))

var dateexp=/\./gi
console.log("12.10.2021".replace(dateexp,"-"))

var exp1=/^hello$/i  //^mean : the first word is checked
console.log(exp1.test("hi....Hello"))


var dateexp1=/^\d\d(\.|\/|\-)\d\d(\.|\/|\-)\d\d\d\d\d$/
console.log(dateexp1.test("23.11/202147"))

var ph=/^((\d\d\-\d\d\d\d\d\d\d\d\d)|(\d\d\d\d\d\d\d\d\d\d\d))$/

console.log(ph.test("09404060399554"))

var phones=/^([0-9]{11}|([0-9]{2}\-[0-9]{9}))$/
console.log(phones.test("09-4241037051"))

var phone2=/^0[1-9]{1,2}\-[0-9]{6,9}$/
console.log(phone2.test("02-123456"))

var emails=/^[a-z]+[_.]*/




