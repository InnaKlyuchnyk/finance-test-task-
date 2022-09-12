import styles from "./TickerListItem.module.css";

function TickerListItem({ ticker }) {
  return (
    <li className={styles.list_item}>
      <p className={styles.brand_name}>{ticker.ticker}</p>
      <p className={styles.indicator_value}>{ticker.price}$</p>
      <p className={styles.indicator_value}>{ticker.change}$</p>
      <p className={styles.indicator_value}>{ticker.change_percent}%</p>
    </li>
  );
}

export default TickerListItem;
