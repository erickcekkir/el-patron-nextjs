"use client";

import styles from "@/components/Hamburger/hamburger.module.css";

export default function Hamburger({ onClickFn }) {
  return (
    <img
      src="/imgs/burger-menu.png"
      className={styles.hamburgerButton}
      onClick={onClickFn}
      alt=""
    />
  );
}
