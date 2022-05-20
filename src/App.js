import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
import Edit from './components/Products/Edit/Edit';
import NewProduct from './containers/NewProduct/NewProduct';

import requireAuth from './utils/requireAuth';

const Home = React.lazy(() => {
  return import('./components/Home/Home');
});

const Register = React.lazy(() => {
  return import('./components/Register/RegisterPage');
});

const Login = React.lazy(() => {
  return import('./containers/Login/Login');
});

const Products = React.lazy(() => {
  return import('./components/Products/Products');
});

const Cart = React.lazy(() => {
  return import('./components/Cart/Cart');
});

// const Edit = React.lazy(() => {
//   return import('./components/Products/Edit/Edit');
// });

const Show = React.lazy(() => {
  return import('./components/Products/Show/Show');
});

// const NewProduct = React.lazy(() => {
//   return import('./containers/NewProduct/NewProduct');
// });

const CheckOut = React.lazy(() => {
  return import('./containers/Checkout/Checkout');
});

const Pay = React.lazy(() => {
  return import('./containers/Pay/Pay');
});

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/register" exact render={props => <Register {...props} />} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route path="/products" exact render={props => <Products {...props} />} />
      <Route path="/cart" exact render={props => <Cart {...props} />} />
      <Route path="/checkout" exact render={props => <CheckOut {...props} />} />
      <Route path="/pay" exact render={props => <Pay {...props} />} />
      {/* <Route
        path="/products/:id/edit"
        exact
        render={props => <Edit {...props} />}
      /> */}
      <Route path="/products/:id/edit" component={requireAuth(Edit)} />
      <Route path="/products/add" component={requireAuth(NewProduct)} />
      <Route
        path="/products/:id/show"
        exact
        render={props => <Show {...props} />}
      />
      {/* <Route
        path="/products/add"
        exact
        render={props => <NewProduct {...props} />}
      /> */}
    </Switch>
  );
  // ba

  return (
    <div>
      <Navigation />
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
      <Footer />
    </div>
  );
}

export default App;
