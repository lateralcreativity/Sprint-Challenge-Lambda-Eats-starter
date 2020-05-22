import React from 'react';
import Nav from './Nav';

export default function Form(props) {
    const { values, inputHandler, submitHandler, checkboxHandler } = props;
    return (
        <>
        <Nav />
        <form onSubmit={submitHandler}>
            <div>
                <h2>Build your own pizza.</h2>

                <label>Choice of size:&nbsp;
                    <select name="size" value={values.size} onChange={inputHandler}>
                        <option value="">Select a size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>

                <label>Choice of sauce:&nbsp;
                    <label>Original Red:&nbsp;
                        <input type="radio" name="sauce" value='original red' onChange={inputHandler}/>
                    </label>

                    <label>Garlic Ranch:&nbsp;
                        <input type="radio" name="sauce" value='garlic ranch' onChange={inputHandler}/>
                    </label>

                    <label>BBQ Sauce:&nbsp;
                        <input type="radio" name="sauce" value='bbq sauce' onChange={inputHandler}/>
                    </label>

                    <label>Spinach Alfredo:&nbsp;
                        <input type="radio" name="sauce" value="spinach alfredo" onChange={inputHandler}/>
                    </label>
                </label>

                <label>Add Toppings:&nbsp;
                    <label>Pepperoni:&nbsp;
                        <input className="topping" type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={checkboxHandler}/>
                    </label>

                    <label>Sausage:&nbsp;
                        <input className="topping" type="checkbox" name="sausage" checked={values.sausage} onChange={checkboxHandler}/>
                    </label>

                    <label>Canadian Bacon:&nbsp;
                        <input className="topping" type="checkbox" name="canadianBacon" checked={values.canadianBacon} onChange={checkboxHandler}/>
                    </label>

                    <label>Spicy Italian Sausage:&nbsp;
                        <input className="topping" type="checkbox" name="spicyItalianSausage" checked={values.spicyItalianSausage} onChange={checkboxHandler}/>
                    </label>
                </label>

                <label>Special Instructions:&nbsp;
                    <input type="text"
                    placeholder="Special Instructions"
                    name="special"
                    value={values.special}
                    onChange={inputHandler}
                    />
                </label>

                <button>Submit Order</button>
            </div>
        </form>
        </>
    )
}