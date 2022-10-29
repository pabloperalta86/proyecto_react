import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className='sticky top-0 left-0'> 
          <NavBar/>
        </header>
        <main className='main'>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Productos:"></ItemListContainer>}/>
            <Route path={'/items/:itemId'} element={<ItemDetailContainer/>} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer greeting="Productos:"></ItemListContainer>} />
            <Route path={'/cart'} element={<Cart/>} />
          </Routes>
        </main>
        <footer className='pie'>
          <Footer/>
        </footer>  
      </div>
    </BrowserRouter>
  );
}

export default App;