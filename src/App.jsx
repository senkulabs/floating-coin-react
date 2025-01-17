import { useState } from 'react'
import Coin from './Coin'
import styles from './App.module.css'
import FloatingText from './FloatingText'

const CHOCOLATE_COST = 9 

function App() {
  const [numOfCoins, setNumOfCoins] = useState(0)
  const [numOfChocolates, setNumOfChocolates] = useState(0)

  // Derived value
  // We calculate how much coin user has wasted by
  // adding the value of number of chocolates to their current coin balance:
  const totalCoinsWasted = numOfCoins + numOfChocolates * CHOCOLATE_COST;

  function buyChocolate() {
    setNumOfCoins(numOfCoins - CHOCOLATE_COST);
    setNumOfChocolates(numOfChocolates + 1);
  }

  function handleNumOfCoins () {
    setNumOfCoins(numOfCoins + 2); 
  }

  return (
    <div className={styles.wrapper}>
      <main>
        <Coin handleNumOfCoins={handleNumOfCoins} />
        { totalCoinsWasted > 0 && <div className={styles.floatingNumWrapper}>
          <FloatingText key={totalCoinsWasted}>
            +2
          </FloatingText>
        </div> }
        <button disabled={numOfCoins < CHOCOLATE_COST} className={styles.shopItem}
        onClick={buyChocolate}>
          Buy chocolate {numOfChocolates > 0 && (`(${numOfChocolates})`)}
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
