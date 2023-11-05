
import {products} from '../products.js';
import {cart,add_items,add_Cart_items} from '../cart.js';



let productHtml=' ';

products.forEach((product)=>{

    productHtml+=

    `<div class="product_block">
    <div class="product_image">
        <img class="product_image2" src="${product.ProductImage}">
    </div>
    
    <div class="product_name">Product:"${product.ProductDisplayName}"
    </div>
    
    <div class="product_rating">Rating:4
    </div>
    
    <div class="product_price">Price:$${product.ProductPrice}
    </div>
    <div class="button_class">
        <button class="add_to_cart js_button" data-product-name="${product.ProductDisplayName}">Add to cart
        </button>
    </div>

    <div class="option_class">
    <select class="js_cart_quantity">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>

    </select>
    </div>
    </div>`

}

)

function total_cart_items(){

    let Quantity=0;

    cart.forEach((item)=>{

        Quantity+=item.quantity;

    })

    console.log(cart);

    return Quantity;
}

function cart_value(){

    const total_quantity= document.querySelector("#quantity");

    total_quantity.innerHTML= `cart value ${total_cart_items()}`;
}


document.querySelector('.body_section').innerHTML=productHtml;

document.querySelectorAll('.js_button').forEach((button)=>{

    button.addEventListener('click',()=>{

        const productname=button.dataset.productName;

        add_items(productname);

        cart_value();

    });

})


let resetButton = document.querySelector('#reset_button');

resetButton.addEventListener('click',()=>{

    cart.splice(0);

    add_Cart_items();

})










