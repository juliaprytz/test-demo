//Javascript med AJAX
//Använda AJAX för att hämta innehållet på en hemsida

//Vad är AJAX?
//AJAX är en teknik, en kombination av saker, för att hämta data från URLs

//Påbörja en hämting
var request = new XMLHttpRequest();
request.onreadystatechange = function(req, res) {
  
  console.log("nåt hände");
  
  console.log("jajemensan");
  
}

request.open('GET', 'http://marby.se/AJK15G/lorem_text.php');
request.send();
