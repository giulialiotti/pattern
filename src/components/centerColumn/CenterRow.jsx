import styles from "./CenterRow.module.scss";

export const CenterRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>

      <div className={styles.centerBox}>
        <div className={styles.triangle}></div>
        <div className={styles.triangle}></div>
        <div className={styles.triangle}></div>
        <div className={styles.triangle}></div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.circle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
