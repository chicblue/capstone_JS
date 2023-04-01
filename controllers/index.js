function renderProduct(arrProduct) {
  var htmlString = "";
  for (var index = 0; index < arrProduct.length; index++) {
    var prod = arrProduct[index];
    htmlString += `
    <div class="col col-sm-6 col-lg-3 col-12 p-3">
          <div class="card">
            <img src="${prod.image}" class="card-img-top" alt="...style:w-100%">
            <div class="card-body">
              <h3 class="">${prod.name}</h3>
              <p class="card-text">${prod.description}</p>
            </div>
            <div class="card-bottom d-flex jusstify-content-around align-items-center">
              <div class="card-btn">
              <a href="./detail.html?id=${prod.id}" class="btn-warning w-100 d-inline-block text-center">Buy now</a>
                
              </div>
              <div class="card-price text-center">
                ${prod.price}
              </div>
            </div>
          </div>
        </div>
        `;
  }
  document.querySelector("#products .row").innerHTML = htmlString;
  return htmlString;
}

function getProductIndex() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (res) {
    console.log(res.data);
    renderProduct(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}
getProductIndex();
