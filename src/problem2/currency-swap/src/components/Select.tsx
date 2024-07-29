import React, { useEffect, useState } from "react";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import { CurrencyOption, fetchCurrencyOption } from "./../utils/data";
import stylesCSS from "./../assets/css/Select.module.css";
import CustomOption from "./CustomSelectOption";

const Control = ({
  children,
  ...props
}: ControlProps<CurrencyOption, false>) => {
  const { image, onImgClick } = props.selectProps;
  const style = { cursor: "pointer" };

  return (
    <components.Control {...props}>
      <img
        onMouseDown={onImgClick}
        src={image}
        alt="Currency"
        style={style}
        width={20}
        height={20}
      />
      {children}
    </components.Control>
  );
};

interface CustomSelectPropsType extends Props<CurrencyOption> {
  id?: string;
  label?: string;
  onChange: (selectedOption: CurrencyOption | null) => void;
}

const CustomSelectProps: React.FC<CustomSelectPropsType> = (props) => {
  const [selectedImg, setSelectedImg] = useState<string>(
    "./../src/assets/tokens/USD.svg"
  );
  const [currencyOptions, setCurrencyOptions] = useState<CurrencyOption[]>([]);
  const [defaultOption, setDefaultOption] = useState<CurrencyOption | null>(
    null
  );

  useEffect(() => {
    const getCurrencyOption = async () => {
      const options = await fetchCurrencyOption();

      setCurrencyOptions(options);

      const defaultCurrency =
        options.find((option) => option.label === "USD") || null;

      setDefaultOption(defaultCurrency);
      if (defaultCurrency) {
        setSelectedImg(defaultCurrency.img);
      }
    };

    getCurrencyOption();
  }, []);

  const styles: StylesConfig<CurrencyOption, false> = {
    control: (css) => ({
      ...css,
      paddingLeft: "1rem",
      boxShadow: "rgba(0, 17, 51, 0.05) 0px 3px 15px",
      border: "rgba(221, 222, 221) 1px solid",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "18px",
      minHeight: "47px",
    }),
  };

  const onChangeSelect = (selectedOption: CurrencyOption | null) => {
    if (selectedOption) {
      setSelectedImg(selectedOption.img);
      props.onChange(selectedOption);
    }
  };

  return (
    <div className={stylesCSS.selectContainer}>
      <label htmlFor={props.id}>{props.label}</label>
      <Select
        {...props}
        image={selectedImg}
        onImgClick={() => {}}
        components={{ Control, Option: CustomOption }}
        isSearchable
        options={currencyOptions}
        styles={styles}
        id={props.id}
        onChange={onChangeSelect}
        defaultValue={defaultOption}
      />
    </div>
  );
};

export default CustomSelectProps;
