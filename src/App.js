import React,{useState} from 'react';
import Creatbox from './components/Creatbox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[state,setState] = useState({
    color:"",
  });
  const [boxes,setBoxes] = useState([]);

  const addbox = (box) =>{
    console.log(box);
    setBoxes([...boxes,box]
    )
  }

  return (
    <div className="App">
      <Creatbox onNewMessage={addbox} input={state} setInput={setState}/>
      <h1 className='font-italic'>Box Generator</h1>
      <div className="d-flex justify-content-center flex-wrap p-4">
      {
        boxes.map((box,i) =>
        <div className='box' style={{width:"100px", height:"100px",margin:'20px', backgroundColor:box.color}}></div>)
      }
      </div>
    </div>
  );
}

export default App;
