import styles from "./Circle.module.css";

type CircleType = {
  top?: any;
  right?: any;
  bottom?: any;
  left?: any;
  dimension: string;
  color: string;
};

export default function Circle({
  color,
  dimension,
  bottom = "unset",
  left = "unset",
  right = "unset",
  top = "unset",
}: CircleType) {
  return (
    <div
      className={styles.wrapper}
      style={{
        top,
        right,
        bottom,
        left,
        color,
        width: dimension,
      }}
    ></div>
  );
}
