import React, { MouseEventHandler, useState } from "react";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import { ColourOption, colourOptions, stateOptions } from "./../ultils/data";
import stylesCSS from "./../assets/css/Select.module.css";

const EMOJIS = ["👍", "🤙", "👏", "👌", "🙌", "✌️", "🖖", "👐"];

const Control = ({ children, ...props }: ControlProps<ColourOption, false>) => {
  const { emoji, onEmojiClick } = props.selectProps;
  const style = { cursor: "pointer" };

  return (
    <components.Control {...props}>
      <span onMouseDown={onEmojiClick} style={style}>
        {emoji}
      </span>
      {children}
    </components.Control>
  );
};

interface CustomSelectPropsType extends Props<ColourOption> {
  id?: string;
  label?: string;
}

const CustomSelectProps: React.FC<CustomSelectPropsType> = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const onClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    setClickCount(clickCount + 1);
    e.preventDefault();
    e.stopPropagation();
  };

  const styles: StylesConfig<ColourOption, false> = {
    control: (css) => ({
      ...css,
      paddingLeft: "1rem",
      boxShadow: "rgba(0, 17, 51, 0.05) 0px 3px 15px",
      border: "rgba(221, 222, 221) 1px solid",
      borderRadius: "6px",
      cursor: "pointer"
    }),
  };

  const emoji = EMOJIS[clickCount % EMOJIS.length];

  return (
    <div className={stylesCSS.selectContainer}>
      <label htmlFor={props.id}>{props.label}</label>
      <Select
        {...props}
        emoji={emoji}
        onEmojiClick={onClick}
        components={{ Control }}
        isSearchable
        name="emoji"
        options={colourOptions}
        styles={styles}
        id={props.id}
      />
    </div>
  );
};

export default CustomSelectProps;
