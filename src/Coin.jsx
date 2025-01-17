import './Coin.css';

function Coin({ handleNumOfCoins }) {
    return (
        <div className="coin-wrapper">
          <button className="coin" onClick={handleNumOfCoins}>
            <span className="visually-hidden">Add 2 coin</span>
            <img className="coin-image" alt="" src="https://sandpack-bundler.vercel.app/img/toonie.png" />
          </button>
        </div>
    )
}

export default Coin;