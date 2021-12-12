fetch("https://meme-api.herokuapp.com/gimme")
//('https://api.covid19api.com/summary')
.then( (apidata) => {
 
   return apidata.json();
})
.then((actualdata) => {
  const mydata = actualdata.Countries;
  document.getElementById("apiindia").innerHTML = mydata ;
})

.catch((error) =>{
  console.log(`The error${error}`);
});