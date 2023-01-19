const url = "https://striveschool-api.herokuapp.com/api/product/";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQxMzcwNDUsImV4cCI6MTY3NTM0NjY0NX0.wl8FcslPN4SA6d6Hsg7Y3Wm7mNhAtVgT9M3KxWUm1wY",
  },
};

const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);

window.onload = async () => {
  try {
    if (id !== null) {
      const postButton = document.querySelector(".btn-primary");
      postButton.remove();

      let response = await fetch(url + "/" + id);
      if (response.ok) {
        let { name, description, price, imgURL } = await res.json();
        document.querySelector("#eventPrice").value = price;
        document.querySelector("#eventName").value = name;
        document.querySelector("#eventDescription").value = description;
        document.querySelector("#eventImgURL").value = imgURL;
      } else {
        console.log(res);
      }
    } else {
      const putButton = document.querySelector(".btn-success");
      putButton.remove();
    }
  } catch (error) {}
};

const handleNewEvent = async (submitEvents) => {
  try {
    submitEvents;
  } catch (error) {}
};

// const handleBackpage = async (submitEvent) => {
//   try {
//     submitEvent.preventDefault();
//     const eventToSend = {
//       name: document.querySelector("#eventName").value,
//       description: document.querySelector("#eventDescription").value,
//       imagURL: document.querySelector("#eventImgURL").value,
//       price: document.querySelector("#eventprice").value,
//     };
//     const options = {
//       headers: new Headers({
//         "Content-type": "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5NGRkNWU3MzczODAwMTUzNzQ0MDYiLCJpYXQiOjE2NzQxMzcwNDUsImV4cCI6MTY3NTM0NjY0NX0.wl8FcslPN4SA6d6Hsg7Y3Wm7mNhAtVgT9M3KxWUm1wY",
//       }),
//       body: JSON.stringify(eventToSend),
//     };

//     let finalURL = url;
//     if (id === null) {
//       options.method = "POST";
//     } else {
//       finalURL += `/${id}`;
//       options.method = "PUT";
//     }

//     const res = await fetch(finalURL, options);
//   } catch (error) {
//     console.log(error);
//   }
// };
