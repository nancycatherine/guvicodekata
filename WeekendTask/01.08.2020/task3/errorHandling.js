var request = new XMLHttpRequest();
request.open("GET", "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com");
request.send();
// Error handling
request.onerror = function(){
console.log("Sorry for the inconvenience, Please try again later.");
}
request.onload = function() {
// Checking for response
if(this.response){
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
 // document.getElementById('item').innerHTML = JSON.stringify(data);
  console.log(data);
 }
}
