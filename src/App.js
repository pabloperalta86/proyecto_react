import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header> 
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="PRODUCTOS"></ItemListContainer>}/>
          <Route path={'/items/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer greeting="PRODUCTOS"></ItemListContainer>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;