let cart = document.querySelector('#cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.container-ass');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



cart.addEventListener('click', ()=>{
    body.classList.add('active'); //ketika class .shopping di klik maka body/tubuh akan memiliki class = "active"
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');//ketika class .shopping di klik maka class = "active" pada tubuh akan dihapus
})

// kesimpulan = kita bisa menambahkan class pada sebuah element (body,div,section) dan bahkan kita bisa menambahkan sebuah class dengan class kedua, dimana kita
//hanya perlu mengidentifikasi class yg ingin kita tambahkan jumlah classnya dalam kondisi tertentu 

let products = [
    {
        id: 4,
        image: 'gallery/g1.jpg',
        jenis1: "Low Sugar",
        name:  'Strawberry Cake',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 37000
    },
    {
        id: 4,
        image: 'gallery/g2.jpg',
        jenis1: "Low Sugar",
        name:  'Chocolate Cupcake',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 28000
    },
    {
        id: 4,
        image: 'gallery/g3.jpg',
        jenis1: "Low Sugar",
        name:  'Wheat Bread',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 42000
    },
    {
        id: 4,
        image: 'gallery/g4.jpg',
        jenis1: "Low Sugar",
        name:  'Classic Bread',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 66000
    },
    {
        id: 4,
        image: 'gallery/g5.jpg',
        jenis1: "Low Sugar",
        name:  'Raisin Cake',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 26000
    },
    {
        id: 4,
        image: 'gallery/g6.jpg',
        jenis1: "Low Sugar",
        name:  'Ginger Bread',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 35000
    },
    {
        id: 4,
        image: 'gallery/g7.jpg',
        jenis1: "Low Sugar",
        name:  'Pink Cupcake',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 33000
    },
    {
        id: 4,
        image: 'gallery/g8.jpg',
        jenis1: "Low Sugar",
        name:  'Croussaint',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 43000
    },
    {
        id: 4,
        image: 'gallery/g9.jpg',
        jenis1: "Low Sugar",
        name: 'Pastry',
        jenis3 : "280-900",
        jenis4 : "calories",
        jenis5 : "4.9",
        jenis6 : "rating (537)",
        price: 30000
    },

];
let listCards  = [];// PENDECLARE-AN ARRAY UNTUK NANTINYA AKAN DIGUNAKAN UNTUK .card  (halaman shopping card)

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-range1');
        newDiv.innerHTML = `
        
        <img
        src="img/${value.image}"
        class="product-range-img1"
        alt="Bread Products"
      />
      <div class="product-range-content">
        <div class="product-range-tags">
          <span class="tag tag--vegetarian">${value.jenis1}</span>
        </div>
        <p class="product-range-title">${value.name}</p>
        <ul class="product-range-attributes">
          <li class="product-range-attribute">
            <ion-icon
              class="product-range-icon"
              name="flame-outline"
            ></ion-icon>
            <span><strong>${value.jenis3}</strong> ${value.jenis4}</span>
          </li>
         
          <li class="product-range-attribute">
            <ion-icon
              class="product-range-icon"
              name="star-outline"
            ></ion-icon>
            <span><strong>${value.jenis5}</strong> ${value.jenis6}</span>
          </li>
          <li class="product-range-attribute">
            <span class="product-range-icon">Rp</span>
            <span>${value.price}</span>
          </li>
        </ul>
    
        <button class="add-to-cart-button" onclick="addToCard(${key})">
          <span>Add to Cart</span>
        </button>
    
      </div>
            `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = {
            id: products[key].id,
            name: products[key].name,
            image: products[key].image,
            price: products[key].price,
            quantity: 1
        };
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"></div>
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}