import styles from './styles.module.css';

export default function LargeButton(props) {
    return <button className={`${styles.base} ${styles.large}`}>{ props.text }</button>
}