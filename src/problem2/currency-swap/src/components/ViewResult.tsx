import styles from "./../assets/css/ViewResult.module.css";

export default function ViewResult({
  inputValue,
  fromCurrency,
  toCurrency,
  result,
}) {
  return (
    <>
      <p className={styles.textValue}>
        {inputValue} {fromCurrency} =
      </p>
      <p className={styles.textToCurrency}>
        {result} {toCurrency}
      </p>
      <div>
        <p>
          1 {fromCurrency} = {(result / inputValue).toFixed(4)} {toCurrency}
        </p>
        <p>
          1 {toCurrency} = {(inputValue / result).toFixed(4)} {fromCurrency}
        </p>
      </div>
    </>
  );
}
