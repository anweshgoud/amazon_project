import {products} from '../products.js';

export let cart=JSON.parse(localStorage.getItem('cart'));


export function add_Cart_items(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

if(!cart){
    cart=[];
}




export function add_items(productname){

    let matchingItem;

    cart.forEach((item) =>{

        if(item.ProductName===productname){
            matchingItem=item;
        }
    });
    
    if(matchingItem){
        matchingItem.quantity+= 1;
    }

    else{
        cart.push({ProductName:productname,quantity:1});
    }

    add_Cart_items();

}


export function RemoveItemFromCart(productId){

    let newCart=[];


    cart.forEach((item)=>{

        if(item.ProductName!==productId){

            newCart.push(item);
        }


    });

    cart=newCart;
    add_Cart_items();
    console.log(cart);


}