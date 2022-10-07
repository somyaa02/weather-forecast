console.log("hello")
var button=document.getElementsByClassName("on");
button[0].onclick= myFunction;

function myFunction() {
  var a=document.getElementById("pp").value;
  console.log(a)
 //event.preventDefault()
 var lat;
 var lon;
 fetch('http://api.openweathermap.org/geo/1.0/direct?q='+a+'&limit=1&appid=28ee8e4023cbc34bbf7d473b71344c2c')
 .then(response => {
 return response.json();
 })
 .then(data => {
 console.log(data);
 lat=data[0].lat;
 lon=data[0].lon;
 fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=28ee8e4023cbc34bbf7d473b71344c2c')
 .then(response => {
 return response.json();
 })
 .then(data => {
 console.log(data);
 var temp;
 var des;
 var wind;
 var hum;
 temp=data.main.temp;
 des=data.weather[0].description;
 wind=data.wind.speed;
 hum=data.main.humidity;
 var b=document.getElementsByClassName("data");
 b[0].innerHTML=`<p><span>${temp}<br>
 ${des}</span><br>
 <span class= "re">Wind Speed:${wind}<br>
 Humidity:${hum}</span></p>`
 console.log(b[0]);
 });
 });
}