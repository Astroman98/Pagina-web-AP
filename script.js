const $submit = document.getElementById("submit"),
  $email = document.getElementById("email"),
  $password = document.getElementById("password");

function validateInputs() {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if ($email.value === "") {
    alert("No podes dejar el campo de email vacío.");
    return false;
  }
  if ($password.value === "") {
    alert("No podes dejar el campo de contraseña vacío.");
    return false;
  }

  if (!emailRegex.test($email.value)) {
    alert("Ingrese el formato correcto en el email");
    $email.style.border = "1px solid red";
    return false;
  }

  if (!passwordRegex.test($password.value)) {
    alert("No ha ingresado una contraseña válida.");
    $password.style.border = "1px solid red";
    return false;
  }

  return true;
}

document.addEventListener("click", (e) => {
  if (e.target === $submit) {
    //event.preventDefault();
    validateInputs();
  }
});

/*
//API cartoon


 let url = 'https://api.sampleapis.com/cartoons/cartoons2D';
 fetch(url)
 .then(response => response.json())
 .then(data => mostrarData(data))
 .catch(error => console.log(error))

 const mostrarData = (data) => {
   console.log(data)
   let body = ''
   for (let i = 0; i <data.length; i++) {
     body += `<div class="col"><div class="card" style="width: 15rem;"><img src="${data[i].image}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${data[i].title}</h5>
     <p class="card-text"><mark>Episodios: ${data[i].episodes}</mark> </p>
   </div>
   <div class="d-flex justify-content-around mb-5">
     <button type="button" class="btn btn-primary">Ver Ahora</button>
   </div>
 </div>
 </div>`
     //body += `<tr><td>${data[i].title}</td></tr><img src="${data[i].image}">`
   }

   document.getElementById('data').innerHTML = body

 }



*/

const url = "https://imdb-top-100-movies.p.rapidapi.com/series/";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "326b5c24c9mshede2f1b9a4b6429p1c1e0fjsn7b82588f64f7",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));



const mostrarData = (data) => {
  console.log(data);
  let body = "";
  for (let i = 0; i < 20; i++) {
    body += `<div class="col"><div class="card" style="width: 15rem;"><img src="${data[i].image}" class="card-img-top" alt="..." onerror="this.onerror=null; this.src='https://http2.mlstatic.com/D_NQ_NP_843835-MCO72929232475_112023-O.webp';">
<div class="card-body">
<h5 class="card-title">${data[i].title}</h5>
<p class="card-text"><mark>Rating: ${data[i].rating}</mark> </p>
</div>
<div class="d-flex justify-content-around mb-5">
<button type="button" class="btn btn-primary">Ver Ahora</button>
</div>
</div>
   </div>`;
    //body += `<tr><td>${data[i].title}</td></tr><img src="${data[i].image}">`
  }

  document.getElementById("data").innerHTML = body;
};
