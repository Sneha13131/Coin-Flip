import React, { useState} from 'react';
import './App.css';

const App = () => {
const [result, setResult] = useState('');
const [countHeads, setCountHeads]= useState(0);
const [countTails, setCountTails]= useState(0);

const handleToss = () => {
  const coinSide = Math.random() < 0.5 ? 'Heads' : 'Tails';

  setResult(coinSide);
  coinSide === 'Heads' ? setCountHeads(countHeads + 1) : setCountTails(countTails + 1);
}; 

  return (
    <div className='coin-toss-game'>
      <header><h1>Coin Toss game</h1></header>
      <section>
        <button onClick={handleToss}>Toss Coin</button>
        <br/><br/>
        {result && (
        
          <>
            <img 
            src={result === 'Heads' ?  'https://onlinecoin.club/images/coins/Australia/cff1f193-9381-4c62-b8ef-3b0cb6138c4a.jpg':'https://www.prospectstampsandcoins.com.au/images/product/19/nov05-2006-$2-unc-REV12991501844d6f75682389f137482024751f2179712471.jpg'}
            />
            
            <p>The coin landed on: {result}</p>
            <p>Heads count: {countHeads}</p>
            <p>Tails count : {countTails}</p>
          </>
        )}
      </section>
      </div>
      )
  }


      export default App;


