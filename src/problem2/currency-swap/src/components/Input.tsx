import styles from "./../assets/css/Input.module.css";

export default function Input({ inputName, value, onChange }) {
  return (
    <div className={styles.input}>
      <label htmlFor={inputName}>{inputName}</label>
      <input id={inputName} type="number" value={value} onChange={onChange} />
    </div>
  );
}
