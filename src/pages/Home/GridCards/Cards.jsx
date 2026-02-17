import Styles from './Cards.module.css';

function Cards() {
  return (
    <div className={Styles.cards}>
      <div className={Styles.card}>
        <img src="../../../public/icons/shipping-fast.svg" alt="icon" />
        <h3 className={Styles.heading}>Fast & Reliable Shipping</h3>
        <p className={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
          Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={Styles.card}>
        <img src="../../../public/icons/credit-card-buyer.svg" alt="icon" />
        <h3 className={Styles.heading}>Secure Payment</h3>
        <p className={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
          Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={Styles.card}>
        <img src="../../../public/icons/restock.svg" alt="icon" />
        <h3 className={Styles.heading}>Easy Returns</h3>
        <p className={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
          Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>
      <div className={Styles.card}>
        <img src="../../../public/icons/user-headset.svg" alt="icon" />
        <h3 className={Styles.heading}>24/7 Customer Support</h3>
        <p className={Styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est.
          Aliquam in justo varius, sagittis neque ut, malesuada leo.
        </p>
      </div>
    </div>
  )
}



export default Cards