import React from 'react';
import styles from '../styles/display.module.css'

export function Display() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.display}>
      <p>This is the display page!  Remember, this one uses SSR!</p>
    </div>
  );
}

export default Display;
