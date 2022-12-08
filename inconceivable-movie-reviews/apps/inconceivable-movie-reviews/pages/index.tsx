import React from 'react';
import styles from '../styles/index.module.css'

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.home}>
      <p>This is the home page!</p>
      <button>Contribute</button>
      <br />
      <br />
      <button>View Reviews</button>
    </div>
  );
}

export default Index;
