import {products} from './products.js'
import {cart,RemoveItemFromCart} from './cart.js'



let cartHtml='';

let cartSame;
let cartSame2;

let TotalCost=0;

console.log(cart);


cart.forEach((item)=>{

    products.forEach((productItem)=>{


        if(item.ProductName===productItem.ProductDisplayName){

            cartSame=productItem;
            cartSame2=item;


            cartHtml+=`<div class="body_section">

            <div class="product_details js-delete-button-${cartSame2.ProductName}">
        
                <div class="product_space ">
        
                    <div class="product_space1">
                        <div class="product_image_space">
                            <img class="product_image" src="${cartSame.ProductImage}">
                        </div>
                    </div>
        
                    <div class="Product_details2">
                        <div class="product_name">
                            ${cartSame.ProductDisplayName}
                        </div>
        
                        <div class="in_Cart">
                            <p>In Cart</p>
                            <p>Available to Apply</p>
                        </div>
        
                        <div class="product_price">
                            Price:$${cartSame.ProductPrice}
                        </div>

                        <div class="Quantity">
                        Quantity:${cartSame2.quantity}
                        </div>
        
                        <div class="product_rating">
                            Rating:${cartSame.ProductRating}
                        </div>
        
                        <div class="button_class">
                            <select class="button_id">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
        
                            <div class="button_id">
                                <button class="Delete-button" data-product-id="${cartSame.ProductDisplayName}">Delete</button>
                            </div>
        
                            <div class="Save">
                                <a href="#">Save for later</a>
                            </div>
                            <div class="share">
                                <a href="#">Share</a>
                            </div>
                        </div>
        
                    </div>
        
        
        
                </div>
        
            </div>
        
            <div class="product_amount amount-delete-${cartSame.ProductName}">
                
                <div class="total_amount">
        
                    <p>Your order eligible to Free Delivery</p>
                    <p>Select this option for More Details</p>
        
                </div>
        
                <div class="subtotal">
                    Amount:$${cartSame2.quantity*Number(cartSame.ProductPrice)}
                </div>


        
                <div class="proceed_button">
                    <button id="proceed_button_2">Proceed to Buy</button>
                </div>
        
            </div>
        
        </div>
        
        `
        console.log(cartHtml);
        }
    })

});


document.querySelector('.main_body').innerHTML=cartHtml;


document.querySelector('.total_cost').innerHTML=`Total Cost: $${total_cost()}`;




function total_cost(){

    products.forEach((item)=>{

        cart.forEach((productitem)=>{

            if(item.ProductName===productitem.ProductName){

                TotalCost+=productitem.quantity*Number(item.ProductPrice);

            }
        })
    })

    return TotalCost;

    const total= dayjs();
    console.log(total);




}



document.querySelectorAll('.Delete-button').forEach((button)=>{

    button.addEventListener('click',()=>{

        const productId= button.dataset.productId;


        RemoveItemFromCart(productId);

        const container=document.querySelector(`.js-delete-button-${productId}`);

        const container2=document.querySelector(`.amount-delete-${productId}`);

        total_cost();


        container.remove();
        container2.remove();

        /* hi hello */


    })
    
})



