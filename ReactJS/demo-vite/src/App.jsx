// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ColorBox from './components/combobox.jsx';

function App() {
  // const [count, setCount] = useState(0)
  const name = 'ZAC';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'red', 'blue'];

  return (
    <>
      <h1>React + Vite</h1>
      <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
      {isMale ? <p>Male</p> : <p>Not Male</p>}

      {isMale && <p>Male</p>}
      {!isMale && <p>Not Male</p>}

      {isMale && 
        <div>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
        </div>
      }
      {/* // React.Fragment */}
      {isMale && (
          <> 
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}

        <p>{student.name}</p>
        
        <ul>
          {colorList.map(color => (
            <li key={color} style={{color}} >{color}</li>
          ))}
        </ul>

        <ColorBox color="red"></ColorBox>
    </>
  )
}

export default App
