import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.searchBox}>
        <input type="text" placeholder='Search' />
      </div>
    </div>
  )
}



export default Hero