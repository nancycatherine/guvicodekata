// Calls Ajax XMLHttpRequest

var request = new XMLHttpRequest();
request.open('GET', 'https://dog.ceo/api/breeds/list/all', true);
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
console.log(data);
}
