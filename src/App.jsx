import { useState } from 'react'
import Coin from './Coin'
import styles from './App.module.css'
import FloatingText from './FloatingText'

function App() {
  const [numOfCoins, setNumOfCoins] = useState(0)

  function handleNumOfCoins () {
    setNumOfCoins(numOfCoins + 2); 
  }

  return (
    <div className={styles.wrapper}>
      <main>
        <Coin handleNumOfCoins={handleNumOfCoins} />
        { numOfCoins > 0 && <div className={styles.floatingNumWrapper}>
          <FloatingText key={numOfCoins}>
            +2
          </FloatingText>
        </div> }
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  )
}

export default App
