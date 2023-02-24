import './App.css';
import Card from './components/Card';
import {languages} from "./helper/data";
// import css from "./assets/images/css.png";
// import python from "./assets/images/python.png";
// import java from "./assets/images/java.png";
// import cpp from "./assets/images/cpp.png";
// import typeScript from "./assets/images/ts.png";
// import php from "./assets/images/php.png";
// import javaScript from "./assets/images/javascript.png";
// import html from "./assets/images/html.png";

function App() {
  return (
    <div>
      <h1 className='title'>Languages</h1>
      div.
      {languages.map((lang)=> <Card {...lang}/>)}
      
    </div>
  );
}

export default App;
