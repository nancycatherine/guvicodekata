var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";

function myFunc(){
var cityName = document.getElementById('cityName').value;
var cityId = document.getElementById('cityId').value;
var keys = {};
if(cityName !== undefined && cityName !== ""){
keys.q=cityName
cityId = "";
}
if(cityId !== undefined && cityId !== ""){
keys.id=cityId;
cityName="";
}
keys.appid = "54c00f5acd594523695e4d9302ab4fc6"; // This API key was created by me, which has a validity period of 60 days.

url = frameURL(url,keys);
// XML http request call
var request = new XMLHttpRequest();    
request.open("GET", url);
request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
request.send();
request.onload = function() {
 // Begin accessing JSON data here
var data = JSON.parse(this.response)
document.getElementById('weatherData').innerHTML = JSON.stringify(data);
console.log(data);
}
}


function frameURL(actualUrl,appendString){
var query=[];
for(var key in appendString){
query.push(key+'='+ appendString[key]);
}
return url+(query.length?'?'+query.join('&&'):'');
}
