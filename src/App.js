import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Home from "./components/Home";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import '../src/App.css';
import ProductDetails from './components/product/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/"  Component={Home} exact/>
            <Route path="products/:id" Component={ProductDetails} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
