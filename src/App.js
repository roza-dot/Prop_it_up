import React from 'react';
import './App.css';

const Display = (props) => {
  return (
    <div>
      <h3>Doe, Jane</h3>
      <li>Age: 45</li>
      <li>Hair Color: Black</li>


      <h3>Smith, John</h3>
      <li>Age: 85</li>
      <li>Hair Color: Black</li>


      <h3>Fillmore, Millard</h3>
      <li>Age: 12</li>
      <li>Hair Color: Blonde</li>

      <h3>Smith, Maria</h3>
      <li>Age: 63</li>
      <li>Hair Color: Brown</li>

    </div>

  );
}

function App() {
  return (
    <div className="App">
      <div>
        <Display></Display>


      </div>
    </div>
  );
}

export default App;
