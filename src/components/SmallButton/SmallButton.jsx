import Link from "next/link";
import styles from "@/components/MediumButton/medium-button.module.css";

export default function SmallButton({ text, href = "/" }) {
  return (
    <Link
      className={`${styles.base} ${styles.small} ${styles.smallButton}`}
      href={href}
    >
      {text}
    </Link>
  );
}
