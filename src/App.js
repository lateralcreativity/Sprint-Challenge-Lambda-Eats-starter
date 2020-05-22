import React, { useState } from "react";
import Home from './components/Home';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const defaultFormValues = {
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    special: ''
  }

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [orders, setOrders] = useState([]);

  function inputHandler(event) {
    const name = event.target.name
    const value = event.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  function checkboxHandler(event) {
    const name = event.target.name;

    setFormValues({
      ...formValues,
      [name]: event.target.checked
    })
  }

  function submitHandler( event ) {
    event.preventDefault()

    const newOrder = { ...formValues }

    setFormValues(defaultFormValues)
  }

  function postNewOrder( newOrder ) {
    axios.post('https://reqres.in/api/users', newOrder)
    .then(resolve => {
      setOrders([resolve.data, ...orders])
    })
    .catch(error => {
      debugger
    })
    .finally(() => {
      setFormValues(defaultFormValues)
    })
  }

return (
  <div className="App">
    <Router>
      <Switch>
        <Route path='/pizza'>
          <Form values={formValues} inputHandler={inputHandler} checkboxHandler={checkboxHandler} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </div>
);
};
export default App;
