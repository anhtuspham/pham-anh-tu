import React from "react";
import { components, OptionProps } from "react-select";
import { CurrencyOption } from "./../utils/data";

const CustomOption = (props: OptionProps<CurrencyOption, false>) => {
  return (
    <components.Option {...props}>
      <img
        src={props.data.img}
        alt={props.data.label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      {props.data.label}
    </components.Option>
  );
};

export default CustomOption;
