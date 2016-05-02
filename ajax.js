//Javascript med AJAX
//Använda AJAX för att hämta innehållet på en hemsida

//Vad är AJAX?
//AJAX är en teknik, en kombination av saker, för att hämta data från URLs

//Påbörja en hämting
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  
  console.log("nåt hände");
  
  console.log("jajemensan");
  
  if(request.readyState == 4 && request.status == 200) {
  console.log("Svaret (response) " + request.responseText);
  
  //Spara text i variabel
  var data = request.responseText;
  document.write(data);
  
  }
  
}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
