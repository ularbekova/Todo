// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let massiv =['English', 'Russian', 'Kyrgyz']
//   return (
//     <div className='App' >

// {massiv.map(item =>(
//   <h1>
//     {item}
//   </h1>
// ))}
//     </div>

//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let massiv = [
//     { name: 'Tynchtyk',
//       age:20
//     },
//     {
//       from: 'Kyrgyzstan',
//       cours: 2
//     }
//   ]
//   return (
//     <div className='App' >

// {massiv.map(item =>(
//   <h1>
//     {item.name}
//     {item.age}

//     {item.from}

//   </h1>
// ))}
//     </div>

//   );
// }

// export default App;

import React, { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  function addTodo() {
    setTodo([...todo, text]);
    setText("");
  }
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={text}
          placeholder="добавить тодо"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>+</button>
      </div>
      <ul>
        {todo.map(item =>(
          <li>
            {item}
          </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
