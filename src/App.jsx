import { useState } from 'react'
import './Coin.css'

function App() {
  const [numOfCoins, setNumOfCoins] = useState(0)

  return (
    <div className="wrapper">
      <main>
        <div className="coin-wrapper">
          <button className="coin" onClick={() => setNumOfCoins(numOfCoins + 2)}>
            <span className="visually-hidden">Add 2 coin</span>
            <img className="coin-image" alt="" src="https://sandpack-bundler.vercel.app/img/toonie.png" />
          </button>
        </div>
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  )
}

export default App
