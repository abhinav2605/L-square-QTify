import styles from "./card.module.css";

function Card({image, follow, title}) {
  console.log(image);
  console.log(follow);
  console.log(title)
  return (
    <div className={styles.cardComponent}>
      <div className={styles.card}>
        <img
          src={image}
          alt="card"
          width={150}
          height={205}
        />
        <div className={styles.followDiv}>
          <span className={styles.follow}>{follow} follows</span>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
