import React from 'react';
import Nav from './Nav';
import Order from './Order';

export default function Form(props) {
    const { values, inputHandler, submitHandler, checkboxHandler, errors, disabled, orders } = props;
    return (
        <>
            <Nav />
            <form onSubmit={submitHandler}>
                <div>

                    <div>
                        {
                            Object.values(errors).map((error, idx) => (
                                <div key={idx}>{error}</div>
                            ))
                        }
                    </div>

                    <h2>Build your own pizza.</h2>

                    <p>Choice of size:&nbsp;
                    <select name="size" value={values.size} onChange={inputHandler}>
                            <option value="">Select a size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </p>
                    <hr />

                    <p>Choice of sauce:&nbsp;<br />
                        <label>Original Red:&nbsp;
                        <input type="radio" name="sauce" value='original red' id="originalRed" onChange={inputHandler} />
                            <br />
                            <br />
                        </label>

                        <label>Garlic Ranch:&nbsp;
                        <input type="radio" name="sauce" value='garlic ranch' id="garlicRanch" onChange={inputHandler} />
                            <br />
                            <br />
                        </label>

                        <label>BBQ Sauce:&nbsp;
                        <input type="radio" name="sauce" value='bbq sauce' id="bbqSauce" onChange={inputHandler} />
                            <br />
                            <br />
                        </label>

                        <label>Spinach Alfredo:&nbsp;
                        <input type="radio" name="sauce" value="spinach alfredo" id="spinachAlfredo" onChange={inputHandler} />
                            <br />
                        </label>
                    </p>
                    <hr />

                    <p>Add Toppings:<br />
                        <label>Pepperoni:&nbsp;
                        <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={checkboxHandler} />
                            <br />
                            <br />
                        </label>

                        <label>Sausage:&nbsp;
                        <input type="checkbox" name="sausage" checked={values.sausage} onChange={checkboxHandler} />
                            <br />
                            <br />
                        </label>

                        <label>Canadian Bacon:&nbsp;
                        <input type="checkbox" name="canadianBacon" checked={values.canadianBacon} onChange={checkboxHandler} />
                            <br />
                            <br />
                        </label>

                        <label>Spicy Italian Sausage:&nbsp;
                        <input type="checkbox" name="spicyItalianSausage" checked={values.spicyItalianSausage} onChange={checkboxHandler} />
                            <br />
                            <br />
                        </label>
                    </p>
                    <hr />

                    <p>Special Instructions:&nbsp;
                    <input type="text"
                            placeholder="Special Instructions"
                            name="special"
                            value={values.special}
                            onChange={inputHandler}
                        />
                    </p>
                    <hr />

                    <button className="submit" disabled={disabled}>Submit Order</button>
                </div>
            </form>

            {orders.map(order => {
                return <Order key={order.id} values={order} />
            })}
        </>
    )
}