//Javascript med AJAX
//Använda AJAX för att hämta innehållet på en hemsida

//Vad är AJAX?
//AJAX är en teknik, en kombination av saker, för att hämta data från URLs

//Påbörja en hämting
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  
  console.log("nåt hände");
  
}

request.open('GET', 'http://www.google.com');
request.send();
