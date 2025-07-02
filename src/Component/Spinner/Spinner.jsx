import styles from './spinner.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}
