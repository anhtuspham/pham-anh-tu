import styles from "./../assets/css/ViewResult.module.css";

export default function ViewResult({ inputValue, fromCurrency, toCurrency }) {
  return (
    <>
      <p className={styles.textValue}>
        {inputValue} {fromCurrency} = 
      </p>
      <p className={styles.textToCurrency}>1.0932039203 {toCurrency}</p>
      <div>
        <p>
          1 {fromCurrency} = 1.1111 {toCurrency}
        </p>
        <p>
          1 {toCurrency} = 0.1111 {toCurrency}
        </p>
      </div>
    </>
  );
}
