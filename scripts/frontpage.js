const url = "https://striveschool-api.herokuapp.com/api/product/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQxMzcwNDUsImV4cCI6MTY3NTM0NjY0NX0.wl8FcslPN4SA6d6Hsg7Y3Wm7mNhAtVgT9M3KxWUm1wY",
  },
};

window.onload = async () => {
  await getEvents();
};

const getEvents = async () => {
  try {
    const response = await fetch(url, options);
    const events = await response.json();
    renderEvents(events);
  } catch (error) {}
};

const renderEvents = (arrayOfEvents) => {
  const row = document.querySelector("row");
  row.innerHTML = "";
  arrayOfEvents.forEach((singleEvent) => {
    const { name, description, imgURL, price, _id } = singleEvent;
    row.innerHTML += `
    <div class="card col-12 col-sm-6 col-md-4">
    <img src="${imgURL}" class="card-img-top" alt="${name}">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <p> ${description} </p>
            ${
              price !== null
                ? `<span class="badge badge-pill badge-warning">${price} $</span>`
                : ""
            }
      </div> 
      <div class='col col-6 row justify-content-end'>
      <a href='./backoffice.html?id=${_id}' class='btn btn-primary m-1'> <i class="bi bi-pencil-square"></i> </a>
            <button class='btn btn-danger m-1' onclick='deleteEvent("${_id}")'> <i class="bi bi-trash-fill"></i> </button>
            <a href='./details.html?id=${_id}' class='btn btn-info rounded-pill m-1'> <i class="bi bi-arrow-up-right-square-fill"></i> Details </a>
    </div>
  </div>
    `;
  });
};
