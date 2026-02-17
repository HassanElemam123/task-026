import styles from "./Missions.module.css";

export default function Missions() {
  return (
    <section className={styles.Missions}>
      <h3 className={styles.Title}>Our Mission</h3>

      <div className={styles.Cards}>
        <div className={styles.Card}>
          <h4>Quality Selection</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
            sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <a href="#">View More →</a>
        </div>

        <div className={styles.Card}>
          <h4>Exceptional Service</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
            sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <a href="#">View More →</a>
        </div>

        <div className={styles.Card}>
          <h4>Set Up Stores</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
            sagittis neque ut, malesuada leo.Quality SelectionLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris et ultricies est. Aliquam in justo varius,
          </p>
          <span className={styles.Soon}>Soon</span>
        </div>
      </div>
    </section>
  );
}
