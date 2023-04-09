import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesFile from './Components/RoutesFile';
import Context from './Components/ContextAPI/Context';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <RoutesFile />
        </Context>
      </BrowserRouter>

    </div>
  );
}

export default App;
