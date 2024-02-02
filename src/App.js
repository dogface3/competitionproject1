import React from 'react';
import IdCard from './components/IdCard';
import './App.css';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
  <div className='centerbox'>

      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Iteration 3</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    
      </div>

    </div>
  );
}

export default App;
