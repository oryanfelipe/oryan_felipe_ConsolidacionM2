var url = "https://digimon-api.vercel.app/api/digimon";

var contenido = document.querySelector("#contenido");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);

    for (item of datos) {
      contenido.innerHTML += `
    <div class="tarjeta">
        <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.level}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>    
    `;
    }
  });

function changeColor() {
  document.getElementById("myDiv").style.backgroundColor = "#5c4ef4";
}

function restoreColor() {
  document.getElementById("myDiv").style.backgroundColor = "#b0a9fb";
}

var scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("load", function () {
  // code to run when the page finishes loading
  console.log("Page loaded!");
});

window.addEventListener("resize", function (event) {
  console.log("Window resized!");
});

/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/
