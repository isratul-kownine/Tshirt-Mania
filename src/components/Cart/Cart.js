import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {

    //conditional rendering options 
    //1.Element variable
    //2.ternary operator condition ? true : false
    //3. && operator (shorthand)
    //4.|| operator
    let command;
    if(cart.length === 0) 
    {
        command = <p>Please add at least one item.!!</p>
    } 
    else if (cart.length === 1)
    {
        command = <p>Please add more...</p>
    } 
    else 
    {
        command = <p><small>Thanks for adding!!</small></p>
    }
    return (
        <div>
            <h2>Selected Items :{cart.length}</h2>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() =>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }  
            {cart.length===0 || <p className='orange'>Yeee!!! You are buying.</p>} 
            { cart.length === 3 && <div className='orange'>
                     <h3>Trigonal</h3>
                     <p>You can gift Three persons</p>
                </div>}
               
            
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length===4 && <button>Review Order</button>}
        </div>
    );
};

export default Cart;