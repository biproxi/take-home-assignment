import styles from './index.module.css';

/* eslint-disable-next-line */
export interface EditProps {}

export function Edit(props: EditProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Edit!</h1>
    </div>
  );
}

export default Edit;
