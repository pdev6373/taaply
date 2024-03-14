import styles from "./Row.module.css";

type RowType = {
  img: string;
  topHeading?: string;
  mainHeading?: string;
  body?: string;
  reverse?: boolean;
  component?: JSX.Element;
};

export default function Row({
  img,
  topHeading,
  mainHeading,
  body,
  reverse = false,
  component,
}: RowType) {
  return (
    <div className={`${styles.wrapper} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.main}>
        {topHeading ? (
          <h3 className={styles.topHeading}>{topHeading}</h3>
        ) : (
          <></>
        )}
        {mainHeading ? (
          <h2 className={styles.mainHeading}>{mainHeading}</h2>
        ) : (
          <></>
        )}
        {body ? <p className={styles.body}>{body}</p> : <></>}
        {component ? component : <></>}
      </div>

      <div className={styles.imageWrapper}>
        <img src={img} alt="image" className={styles.image} />
      </div>
    </div>
  );
}
