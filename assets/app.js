const users = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Armand",
    age: 24,
    profession: "footballeur",
    birthDay: "16/04/2001",
  },
  {
    id: 2,
    firstName: "Djibril",
    lastName: "Foungalakuaki",
    age: 30,
    profession: "Developpeur",
    birthDay: "9/10/1995",
  },
];

// Récupération et conversion de l'entièreté des valeurs du formulaire en objet
function getFormValues(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  if (data.age < 0) {
    alert("age not conform!");
    return;
  }
  users.push(data);
  renderCards();
}

function renderCards() {
  let cardHTML = "";
  users.forEach((user) => {
    cardHTML += `
  <div class="card">
  <h4>${user.firstName}</h4>
  <h4>${user.lastName}</h4>
  <p>${user.age} ans</p>
  <p>${user.profession}</p>
  <p>${user.birthDay}</p>
  </div>
  `;
  });
  document.querySelector(".card-container").innerHTML = cardHTML;
}
renderCards();

document.querySelector("form").addEventListener("submit", getFormValues);
