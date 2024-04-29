import { CenterColumn } from "./centerColumn/CenterColumn";
import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColum";

import styles from "./Pattern.module.scss";

export const Pattern = () => {
  return (
    <div className={styles.container}>
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
      <div className={styles.progress} />
    </div>
  );
};
