import styles from "./BottomRow.module.scss";

const LINES_AMOUNT = 20;

export const BottomRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.circle}>
          <div className={styles.inner}>
            {Array.from({ length: LINES_AMOUNT }).map((_, index) => {
              const rotation = (index * (360 / LINES_AMOUNT)) % 360;
              const radians = (rotation * Math.PI) / 180;
              const x = Math.cos(radians) * 40; // Adjust 45 to change distance from center
              const y = Math.sin(radians) * 40; // Adjust 45 to change distance from center

              return (
                <div
                  key={index}
                  className={styles.line}
                  style={{
                    transform: `rotate(${rotation + 90}deg)`,
                    top: `${y}%`,
                    left: `${x}%`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};
