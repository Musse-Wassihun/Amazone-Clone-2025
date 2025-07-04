import './App.css';
import CarouselEffect from './Components/Carousel/CarouselEffect';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
        <Header />
        <CarouselEffect />
        <Category />
        <Product />
    </div>
  );
}

export default App;
