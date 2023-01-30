import { useState } from 'react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false)
  const [vis1, setVis1] = useState(false)
  const [vis2, setVis2] = useState(false)
  const [vis3, setVis3] = useState(false)

  let elem
  if(visible) {
    elem = <p>text</p>
  } 

  let elem1
  if(vis1) {
    elem1 = <p>text 1</p>
  } 

  let elem2
  if(vis2) {
    elem2 = <p>text 2</p>
  } 

  let elem3
  if(vis3) {
    elem3 = <p>text 3</p>
  } 

  return (
    <div className="App">
      {elem}
      <button onClick={() => setVisible(!visible)}>{!visible ? 'show' : 'hide'}</button> <br />
      {elem1}
      <button onClick={() => setVis1(!vis1)}>{!vis1 ? 'show' : 'hide'}</button> <br />
      {elem2}
      <button onClick={() => setVis2(!vis2)}>{!vis2 ? 'show' : 'hide'}</button> <br />
      {elem3}
      <button onClick={() => setVis3(!vis3)}>{!vis3 ? 'show' : 'hide'}</button> <br />
    </div>
  );
}

export default App;
