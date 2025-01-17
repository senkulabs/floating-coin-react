import { useState } from 'react'
import Coin from './Coin'

function App() {
  const [numOfCoins, setNumOfCoins] = useState(0)

  function handleNumOfCoins () {
    setNumOfCoins(numOfCoins + 2); 
  }

  return (
    <div className="wrapper">
      <main>
        <Coin handleNumOfCoins={handleNumOfCoins} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  )
}

export default App
