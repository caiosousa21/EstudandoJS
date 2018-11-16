filmeTitulo = localStorage.getItem("nomeFilme");
url = 'http://www.omdbapi.com/?t=' + filmeTitulo + '&apikey=f74f16b0'
function Get(urlFilme) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", urlFilme, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var filmeJSON = JSON.parse(Get(url));
console.log(filmeJSON.Title)
document.querySelector('p.titulo').textContent =filmeJSON.Title;
document.querySelector('p.ano').textContent =filmeJSON.Year;
document.querySelector('p.data').textContent =filmeJSON.Released;
document.querySelector('p.genero').textContent =filmeJSON.Genre;
document.querySelector('p.sinopse').textContent =filmeJSON.Plot;
document.querySelector('img.poster').src =filmeJSON.Poster;

document.querySelector('p.titulo').animate([
    // keyframes
    {transform: 'translateX(0px)' }, 
    {transform: 'translateX(50px)' },
    {transform: 'translateX(0)'}
  ], { 
    // timing options
    delay: 500,
    duration: 1000,
    iterations: Infinity
  });
