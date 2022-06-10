const url = "https://striveschool-api.herokuapp.com/api/product/";

const getData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzNDM5MzdmZmQ0OTAwMTU4YTdhOWMiLCJpYXQiOjE2NTQ4NjY4MzUsImV4cCI6MTY1NjA3NjQzNX0.Lf3sP1v-oi3JBzgu1SdLmfd8HxkfH_ReSrCy-MXcD1k",
      },
    });

    const products = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (items) => {
  const ul = document.getElementById("itemsList");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<span>${item.name}</span><span>${item.brand}</span>`;

    ul.appendChild(li);
  });
  console.log(displayProducts);
};
