import styles from "./card.module.css";

function Card() {
  return (
    <div className={styles.cardComponent}>
      <div className={styles.card}>
        <img
          src="https://images.pexels.com/photos/33779/hand-microphone-mic-hold.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
          alt="card"
          width={150}
          height={205}
        />
        <div className={styles.followDiv}>
          <span className={styles.follow}>100 follows</span>
        </div>
      </div>
      <p className={styles.title}>awdwa</p>
    </div>
  );
}

export default Card;
