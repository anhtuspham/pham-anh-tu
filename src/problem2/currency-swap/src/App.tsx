import "./App.css";
import Container from "./components/Container";
import CustomSelectProps from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";
import ViewResult from "./components/ViewResult";

function App() {
  return (
    <>
      <Container>
        <div className="convert-title">Currency Swap</div>
        <div className="convert-form">
          <div className="calculate-currency">
            <Input inputName="Amount" />
            <CustomSelectProps id="fromCurrency" label="From" />
            <Button />
            <CustomSelectProps id="toCurrency" label="To" />
          </div>
          <div className="result-currency">
            <ViewResult fromCurrency="BTC" toCurrency="ETH" inputValue="150" />
          </div>
          <div className="convert">
            <button className="btn-convert" type="button">
              Confirm Swap
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
