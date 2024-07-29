import "./App.css";
import Container from "./components/Container";
import CustomSelectProps from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";
import ViewResult from "./components/ViewResult";
import { useState } from "react";
import { CurrencyOption } from "./utils/data";

function App() {
  const [amount, setAmount] = useState<number | null>(null);
  const [fromCurrency, setFromCurrency] = useState<CurrencyOption | null>(null);
  const [toCurrency, setToCurrency] = useState<CurrencyOption | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value < 0) {
      setError("Amount cannot be negative.");
      setAmount(null);
    } else {
      setError(null);
      setAmount(isNaN(value) ? null : value);
    }
  };

  const validateInput = () => {
    if (amount === null || amount <= 0) {
      setError("Please enter a valid amount.");
      return false;
    }
    if (!fromCurrency) {
      setError("Please select the 'from' currency.");
      return false;
    }
    if (!toCurrency) {
      setError("Please select the 'to' currency.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleConvert = () => {
    if (!validateInput()) return;

    setLoading(true);

    setTimeout(() => {
      if (amount && fromCurrency && toCurrency) {
        const convertedAmount =
          (amount * fromCurrency.price) / toCurrency.price;
        setConvertedAmount(convertedAmount);
      }
      setLoading(false);
    }, 1000);
  };

  const handleSwitchCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <Container>
      <div className="convert-title">Currency Swap</div>
      <div className="convert-form">
        <div className="calculate-currency">
          <Input
            inputName="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <CustomSelectProps
            id="fromCurrency"
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
          />
          <Button onClick={handleSwitchCurrencies} />
          <CustomSelectProps
            id="toCurrency"
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="result-currency">
          {convertedAmount && fromCurrency && toCurrency && !loading && (
            <ViewResult
              inputValue={amount}
              fromCurrency={fromCurrency.label}
              toCurrency={toCurrency.label}
              result={convertedAmount}
            />
          )}
          {loading && <div className="loading">Converting...</div>}
        </div>
        <div className="convert">
          <button
            className="btn-convert"
            type="button"
            onClick={handleConvert}
            disabled={loading}
          >
            {loading ? "Converting..." : "Confirm Swap"}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default App;
