"use client";

import styles from "@/components/Hamburger/hamburger.module.css";

/* eslint-disable @next/next/no-img-element */

function toggleNavbar() {
  const header = document.getElementsByTagName("header")[0];
  const currState = header.id;

  const body = document.getElementsByTagName("body")[0];

  if (currState == "header-closed") {
    body.style.gridTemplateColumns = "9rem 1fr";
    header.id = "header-opened";
  } else {
    body.style.removeProperty("grid-template-columns");
    header.id = "header-closed";
  }
}

export default function Hamburger() {
  return (
    <img
      src="/imgs/burger-menu.png"
      className={styles.hamburgerButton}
      onClick={toggleNavbar}
      alt=""
    />
  );
}
