import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Landing from './components/Landing';
import './scss/Card.scss';
import './scss/Style.scss';
import './scss/Landing.scss';

function App() {
  return (
    <div className="App">
      <Landing/>
     <Wrapper/>
    </div>
  );
}

export default App;
