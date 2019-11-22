function izracunajBMI() {
var tezina = eval(document.bmi.tezina.value)
var visina = eval(document.bmi.visina.value)
var visina2 = visina / 100
var BMI = tezina / (visina2 * visina2)
document.getElementById("rezultat").innerHTML = "Vaš BMI je: "+custRound(BMI,1)+"<br/>";
}
function custRound(x,places) {
return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places)
}

//document.oncontextmenu = function() { return false;}

function vreme()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML="Ta&#269;no vreme je "+h+":"+m+":"+s;
t=setTimeout('vreme()',10);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}



function provera() {
if (document.forms[0].ime.value=='') {
alert("Unsite ime i prezime!");
document.forms[0].ime.focus();
return false
}

if (document.forms[0].email.value=='') {
alert("Unesite e-mail!");
document.forms[0].email.focus();
return false;
}


if(document.forms[0].email.value.indexOf('@') == -1)
{
alert("Niste uneli e-mail adresu u odgovarajucem formatu!");
document.forms[0].email.focus();
return false;
}
if (document.forms[0].svrha.value=='') {
alert("Niste uneli svrhu!");
document.forms[0].svrha.focus();
return false;
}
if (document.forms[0].poruka.value=='') {
alert("Niste uneli Vase poruku!");
document.forms[0].poruka.focus();
return false;
}

return confirm("Ispravno ste uneli sve podatke, da li zelite da nastavite sa slanjem?");
}