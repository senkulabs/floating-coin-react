import { useState } from 'react'
import Coin from './Coin'
import styles from './App.module.css'
import FloatingText from './FloatingText'

const CHOCOLATE_COST = 9 

function App() {
  const [numOfCoins, setNumOfCoins] = useState(0)
  const [numOfChocolate, setNumOfChocolate] = useState(0)
  const [floatingTextKey, setFloatingTextKey] = useState('initial');

  function buyChocolate() {
    setNumOfCoins(numOfCoins - CHOCOLATE_COST);
    setNumOfChocolate(numOfChocolate + 1);
  }

  function handleNumOfCoins () {
    setNumOfCoins(numOfCoins + 2); 
    setFloatingTextKey(crypto.randomUUID());
  }

  return (
    <div className={styles.wrapper}>
      <main>
        <Coin handleNumOfCoins={handleNumOfCoins} />
        { floatingTextKey !== 'initial' && <div className={styles.floatingNumWrapper}>
          <FloatingText key={floatingTextKey}>
            +2
          </FloatingText>
        </div> }
        <button disabled={numOfCoins < CHOCOLATE_COST} className={styles.shopItem}
        onClick={buyChocolate}>
          Buy chocolate {numOfChocolate > 0 && (`(${numOfChocolate})`)}
        </button>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  )
}

export default App
