import TickerListItem from "../TickerListItem";
import styles from "./TickersList.module.css";

function TickersList({ tickers }) {
  return (
    <ul className={styles.list}>
      {tickers.map((ticker) => (
        <TickerListItem ticker={ticker} key={ticker.ticker} />
      ))}
    </ul>
  );
}

export default TickersList;
