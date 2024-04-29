import styles from "./LeftColumn.module.scss";

export const LeftColumn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={styles.whiteCircle} />
        <div className={styles.blackCircle} />
      </div>
      <div className={styles.bottomBox}>
        <div className={styles.bar}>
          <div className={styles.barYellow}></div>
        </div>
        <div className={styles.bar}>
          <div className={styles.barYellow}></div>
        </div>
        <div className={styles.bar}>
          <div className={styles.barYellow}></div>
        </div>
        <div className={styles.bar}>
          <div className={styles.barYellow}></div>
        </div>
      </div>
    </div>
  );
};
