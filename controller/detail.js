
function renderDetail(data){
    let htmlString='';
    let sizeString = data.size.map((size) => {
        return `<li class="detail__size">${size}</li>`;
    }).join('');
    htmlString+=`
    <div class="detail__img">
        <img src="${data.image}">
    </div>

    <div class="detail__content">
        <h3 class="detail__name">${data.name}</h3>
        <p class="detail__decription">${data.description}</p>
        <p class="detail__label-size">Available size</p>
        <ul class="detail__sizes">
            ${sizeString}
        </ul>
        <div class="detail__price">${data.price}$</div>
        <div class="detail__quality">
            <button class="detail__increase-btn">+</button>
            <input type="number" class="detail__number" value="1">
            <button class="detail__decrease-btn">-</button>
        </div>
        <button class="detail__add-btn">Add to cart</button>
    </div>
    `
    document.querySelector('.detail .container').innerHTML = htmlString;
    return htmlString;
}

function getProductDeltail(){

    let param = new URL(window.location.href)
    let thamSo = param.searchParams.get('id')
    let promise = axios({
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${thamSo}`,
        method: 'GET'
    })
    promise.then(function(res){
        renderDetail(res.data.content)
    })
}
getProductDeltail();