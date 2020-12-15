let submit = document.getElementById('submit');
let result = document.getElementById('submit');




submit.addEventListener("click", () => {

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://pacific-refuge-73853.herokuapp.com/predict";

  let area = Number(document.getElementById("area").value);
  let property = document.getElementById("property").value;
  let rooms = Number(document.getElementById("rooms").value);
  let zip = Number(document.getElementById("zip").value);
  let land = Number(document.getElementById("land").value);
  let garden = document.getElementById("garden").value;
  let address = document.getElementById("address").value;
  let facade = Number(document.getElementById("facade").value);

  let theData = {

    data : { 
      "area":area,
      "property-type":property,
      "rooms-number":rooms,
      "zip-code":zip,
      "land-area":land,
      "garden":garden,
      // "garden-area":100, --> en commentaires, les optionnels
      // "equipped-kitchen":true,
      "full-address":address,
      // "swimmingpool":false,
      // "furnished":true,
      // "open-fire":true,
      // "terrace":false,
      // "terrace-area":0,
      "facades-number":facade,
      // "building-state":"NEW"
      }
    }

    let submit = document.getElementById('submit');

  fetch(proxyurl+url,{
    method: "POST",
    body: JSON.stringify(theData),
    headers: {"Content-type": "application/json"}
    })
  .then(response => response.json())
  .then(data => 
    result.insertAdjacentHTML('afterend', '<br><p>Le bien vous coûtera '+data.prediction+' euros</p>'))
  .catch(err => console.log(err));


}); 




// https://pacific-refuge-73853.herokuapp.com/
// https://powerful-anchorage-02678.herokuapp.com/
