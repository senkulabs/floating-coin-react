import styles from './Coin.module.css';

function Coin({ handleNumOfCoins }) {
    return (
        <div className={styles.coinWrapper}>
          <button className={styles.coin} onClick={handleNumOfCoins}>
            <span className="visually-hidden">Add 2 coin</span>
            <img className={styles.coinImage} alt="" src="https://sandpack-bundler.vercel.app/img/toonie.png" />
          </button>
        </div>
    )
}

export default Coin;