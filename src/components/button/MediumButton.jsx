import styles from "./styles.module.css";

export default function MediumButton(props) {
    return <button className={`${styles.base} ${styles.medium}`}>{ props.text }</button>
}