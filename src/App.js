<<<<<<< HEAD
import './App.css';
import Greetings from './components/iteration2.js'
import BoxColor from './components/iteration4.js';
import CreditCard from './components/iteration5.js'
=======
import React from 'react';
import IdCard from './components/IdCard';
import './App.css';
import Random from './components/Random';
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h2>iteration2</h2>
      <p>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </p>
      <h3>iteration4</h3>
        <p>
          <div className='box'>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
          </div>
        </p>
      <h5>iteration5</h5>
      <p>
        <div className='kortti'>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" 
          />
        </div>
      </p>
=======
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

>>>>>>> main
    </div>
  );
}

export default App;
