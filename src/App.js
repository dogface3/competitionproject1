import './App.css';
import Greetings from './components/iteration2.js'
import BoxColor from './components/iteration4.js';
import CreditCard from './components/iteration5.js'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
