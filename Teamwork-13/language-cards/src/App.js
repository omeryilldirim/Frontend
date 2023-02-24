import './App.css';
import Card from './components/Card';
import {languages} from "./helper/data";
import logo from "./assets/images/react.svg"

function App() {
  return (
    <div>
      <header>
        <img className='logo-img' src={logo} alt="logo" />
      </header>
      <div className="mainContainer">
        <h1 className='title'>Languages</h1>
        <div className="languageContainer">
          {languages.map((lang)=> <Card {...lang}/>)}
        </div>
      </div>     
    </div>
  );
}

export default App;
