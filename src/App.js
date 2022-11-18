
import './App.css';
import Navbar from './Components/navbar/navbar';
import Update from './Components/navbar/update';
import Classbased from './Components/navbar/Classbased';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <Classbased></Classbased>
       <Update name='Priya'></Update>
      </header>
    </div>
  );
}

export default App;
