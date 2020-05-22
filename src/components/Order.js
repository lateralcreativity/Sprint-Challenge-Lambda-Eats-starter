import React from 'react';

export default function Order( { values } ) {
    return (
        <div>
            <h2>Your Order:</h2>
            <p>Size:&nbsp; {values.size}</p>
            <p>Sauce:&nbsp; {values.sauce}</p>
            <p>Toppings:&nbsp; 
            {values.pepperoni ? <p>Pepperoni</p> : null}
            {values.sausage ? <p>Sausage</p> : null}
            {values.canadianBacon ? <p>Canadian Bacon</p> : null}
            {values.spicyItalianSausage ? <p>Spicy Italian Sausage</p> : null}
            </p>
            <p>Special Requests:&nbsp; {values.special}</p>
            
        </div>
    )
}