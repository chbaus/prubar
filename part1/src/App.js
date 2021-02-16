import './App.css';
import Saludo from './components/Saludo';



function App() { 
 
  return (  
    <div className="App">
    <Saludo nombre="Juan"/>
    <Saludo color="red" />
    <Saludo />
    <Saludo />
    </div>
  );
}

export default App;
