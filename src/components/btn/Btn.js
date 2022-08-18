import React, { useState } from 'react';

import styles from './btn.module.scss';

const BtnMain = () => {
  return (
    <button type="button" className={styles.btnmain}>
      More
    </button>
  );
};

const Btn = ({ text, clickHandler }) => {
  return (
    <button type="button" className={styles.btn} onClick={(e) => clickHandler(e.target.innerText)}>
      {text}
    </button>
  );
};

export { BtnMain, Btn };
