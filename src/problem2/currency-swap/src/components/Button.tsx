import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./../assets/css/Button.module.css";

export default function Button({ onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRightArrowLeft} />
    </div>
  );
}
