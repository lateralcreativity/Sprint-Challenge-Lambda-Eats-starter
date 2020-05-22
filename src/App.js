import React, { useState, useEffect } from "react";
import Home from './components/Home';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';

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

  const defaultFormErrors = {
    size:'',
    sauce: '',
    pepperoni: '',
    sausage: '',
    canadianBacon: '',
    spicyItalianSausage: '',
    special: ''
  }

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true)

  function inputHandler(event) {
    const name = event.target.name
    const value = event.target.value

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(error => {
      setFormErrors({
        ...formErrors,
        [name]: error.errors[0]
      })
    })

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
    postNewOrder(newOrder)
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

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

return (
  <div className="App">
    <Router>
      <Switch>
        <Route path='/pizza'>
          <Form values={formValues} inputHandler={inputHandler} checkboxHandler={checkboxHandler} submitHandler={submitHandler} errors={formErrors} disabled={disabled} orders={orders} />
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
