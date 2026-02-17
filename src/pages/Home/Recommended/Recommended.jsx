import styles from './Recommended.module.css'

function Recommended() {
  return (
    <section className={styles.Recommended}>
      <h2 className={styles.Title}>Recomended For You</h2>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.Placeholder}>
            <img src="../../../public/rich-dad.png" alt="image"/>
          </div>
          <h3>Rich Dad And Poor Dad</h3>
          <p className={styles.Author}>Author: <span>Robert T. Kiyosaki</span></p>
          <p className={styles.Descreption}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
            Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
          </p>
          <div className={styles.StarsHolder}>
            <img src="../../../public/stars-1.svg" alt="Rating" />
            <span>(180 Review)</span>
          </div>
          <p className={styles.Rate}>
            Rate <span>4.5</span>
          </p>
          <div className={styles.Btns}>
            <button className={styles.AddBtn}>Add to Cart
              <img src="../../../public/shopping-cart.svg" alt="icon" />
            </button>
            <button className={styles.Like}><img src="../../../public/heart.svg" alt="icon" /></button>
          </div>
          <span className={styles.Price}>$30.00</span>
        </div>
      </div>
      <div className={styles.CardContainer}>
        <div className={styles.Card}>
          <div className={styles.Placeholder}>
            <img src="../../../public/books-design.png" alt="image"/>
          </div>
          <h3>Rich Dad And Poor Dad</h3>
          <p className={styles.Author}>Author: <span>Debbie Berne</span></p>
          <p className={styles.Descreption}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
            Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,
          </p>
          <div className={styles.StarsHolder}>
            <img src="../../../public/stars-1.svg" alt="Rating" />
            <span>(210 Review)</span>
          </div>
          <p className={styles.Rate}>
            Rate <span>4.5</span>
          </p>
          <div className={styles.Btns}>
            <button className={styles.AddBtn}>Add to Cart
              <img src="../../../public/shopping-cart.svg" alt="icon" />
            </button>
            <button className={styles.Like}><img src="../../../public/heart.svg" alt="icon" /></button>
          </div>
          <span className={styles.Price}>$30.00</span>
        </div>
      </div>
    </section>
  )
}



export default Recommended