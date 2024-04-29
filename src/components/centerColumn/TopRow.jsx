import styles from "./TopRow.module.scss";

export const TopRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.leftTop}>
          <div className={styles.circle} />
        </div>
        <div className={styles.leftBottom}>
          <div className={styles.circle}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className={styles.centerBox}>
        <div className={styles.eye}>
          <div className={styles.pupil}></div>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};
