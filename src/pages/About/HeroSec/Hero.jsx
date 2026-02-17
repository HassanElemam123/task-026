import styles from './Hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.Hero}>
        <h2 className={styles.Heading}>About Bookshop</h2>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
        </div>
    </>
  )
}



export default Hero