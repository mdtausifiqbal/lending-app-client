import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StripeComponent from './components/StripeComponent';
import PaymentComponent from './components/PaymentComponent';
import AdminInterface from './components/AdminInterface';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/stripe">
            <StripeComponent />
          </Route>
          <Route path="/payment">
            <PaymentComponent />
          </Route>
          <Route path="/admin">
            <AdminInterface />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
/*
In this example, we import the necessary React components and use react-router-dom to set up routes for each component. We wrap the application in a Router component and define a Switch with Route components for the Dashboard, StripeComponent, PaymentComponent, and AdminInterface components.

You can customize this file as needed, such as adding user authentication, protected routes, or additional pages.
*/