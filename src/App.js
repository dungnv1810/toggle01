import React, {useState} from 'react';
import A from './toggle/A';
import B from './toggle/B';
import './App.css';

function App() {
  const [isShow, setIsChow] = useState(true);
  const hendleToggleComponent = () =>{
    const newToggle = !isShow;
    setIsChow(newToggle)
  }
  return (
    <React.Fragment>
    <h1>IsShow:{isShow.toString()}</h1>
    <button onClick={hendleToggleComponent}>Toggle</button>
      {
        isShow ? (<div><A/></div>) : (<div><B/></div>)
      }
    </React.Fragment>
  );
}

export default App;
