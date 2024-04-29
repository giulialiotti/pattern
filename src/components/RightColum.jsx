import styles from "./RightColumn.module.scss";

export const RightColumn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <div className={styles.bar}>
          <div className={styles.barRed}></div>
        </div>
        <div className={styles.bar}>
          <div className={styles.barRed}></div>
        </div>
        <div className={styles.bar}>
          <div className={styles.barRed}></div>
        </div>
      </div>

      <div className={styles.bottomBox}>
        <div className={styles.topLeft}></div>
        <div className={styles.topRight}>
          <div className={styles.triangle} />
          <div className={styles.circle} />
        </div>
        <div className={styles.bottomLeft}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.11"
            >
              <path
                fill="none"
                d="M12.572.512c-.041 0-.078.043-.083.083l-.833 4.952L7.62 2.634c-.033-.025-.096-.029-.125 0L2.627 7.503c-.03.028-.025.092 0 .124l2.912 4.037-4.951.832c-.041.009-.083.042-.083.083v6.866c0 .041.042.078.083.082l4.951.833-2.912 4.078c-.025.032-.03.095 0 .124l4.868 4.827c.03.03.092.025.125 0l4.036-2.87.832 4.91c.006.04.042.082.084.082h6.866c.04 0 .078-.042.083-.083l.79-4.952 4.12 2.913c.033.025.096.03.125 0l4.827-4.827c.029-.029.025-.092 0-.124L26.47 20.36l4.952-.833c.04-.009.083-.042.083-.082v-6.866c0-.042-.042-.078-.083-.083l-4.91-.79 2.87-4.079c.026-.032.03-.095 0-.124l-4.826-4.869c-.03-.029-.092-.025-.125 0l-4.078 2.913-.832-4.952c-.006-.04-.042-.083-.083-.083h-6.866z"
              ></path>
            </g>
          </svg>
        </div>
        <div className={styles.bottomRight}></div>
      </div>
    </div>
  );
};
