import styles from "./CenterColumn.module.scss";

import { TopRow } from "./TopRow";
import { CenterRow } from "./CenterRow";
import { BottomRow } from "./BottomRow";

export const CenterColumn = () => {
  return (
    <div className={styles.container}>
      <TopRow />
      <CenterRow />
      <BottomRow />
    </div>
  );
};
