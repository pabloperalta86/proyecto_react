import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header> 
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting="Aca van los productos"></ItemListContainer>
    </div>
  );
}

export default App;