import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap'; // Bootstrap JS
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome CSS


const asideExit = document.querySelector(".fa-xmark ");
const aside = document.querySelector(".aside-container");
const basketBtn = document.querySelector(".basket-btn");
const cards = document.querySelector(".cards")
const elecronicsBtn = document.querySelector(".elecronics-btn")
const basketAside = document.querySelector(".basket-aside");
let basket = JSON.parse(localStorage.getItem("data")) || [];


window.addEventListener("load", hide(true));

const getData = async () => {
    try {
        const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");

        if (!res.ok) {

            throw new Error();
        }
        const data = await res.json()
        console.log(data)

        showToScreen(data)
    } catch (error) {
        console.log("Somethin went wrong")
    };
}
getData()

function showToScreen(getData) {
    getData.map(element => {
        const { id, image, description, price, title } = element;

        cards.innerHTML += `
          <div class="card" style="width: 18rem;">
        <img class="card-img-top w-75" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <div class="card-end mt-auto text-center">
          <div class="price-info d-flex justify-content-between">
            <p class="price-text">Price:</p>
            <p class="price">${price}</p>
          </div>
          <div class="cart-btn d-flex justify-content-around p-2">
            <a href="#" onclick="addToCard(${element})" class="btn btn-danger">Add To Cart</a>
            <a href="#" onclick="seeDetails()"  class="btn btn-primary">See Details</a>
          </div>
        </div>

        `

    });

}

const addToCard = (id) => {
    console.log(id);
    localStorage.setItem("data", JSON.stringify(id));
    let selectedItem = id;
    let search = basket.find(product => product.id === selectedItem.id);
    // basketAside.innerHTML += `
    // </div>
    // <div class="cart-item">
    //   <img width="100" src="./src/assets/computer.jpg" alt="" />
    //   <div class="details">
    //     <div class="title-price-x">
    //       <h5 class="title-price">
    //         <p>Macbook</p>
    //       </h5>
    //     </div>
    //     <div class="buttons-cart">
    //       <i onclick="decrement()" class="fa-solid fa-minus"></i>
    //       <div id=${id} class="quantity"> 5</div>
    //       <i onclick="decrement()" class="fa-solid fa-plus"></i>
    //     </div>
    //     <h3>Total : 5 X 700$</h3>
    //     <button class="remove-product">Remove</button>
    //   </div>
    // </div>
    // `
}

const seeDetails = () => {
    console.log("see details")
}

let incrementBtn = (id) => {
    let selectedProductId = id;
    let search = basket.find(product => product.id === selectedProductId.id);
    if (search === undefined) {
        basket.push({ id: selectedProductId.id, item: 1 })
    } else {
        search.item++;
    }
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket));
};

function hide(x) {
    if (x) {
        aside.style.display = "none"

    } else {
        aside.style.display = "block"

        console.log("hiden")
    }
}

