import { NavLink } from 'react-router';
import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Ubber}>
        <div className={styles.LeftSide}>
          <div className={styles.LogoContainer}>
            <img src="/icons/book-bookmark-1.svg" alt="icon" />
            <span className={styles.LogoName}>Bookshop</span>
          </div>


          <nav className={styles.Links}>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/books" end>Books</NavLink>
            <NavLink to="/about" end>About us</NavLink>
          </nav>
        </div>
        <div className={styles.RightSide}>
          <img src="../../../public/icons/fb.svg" alt="facebook" />
          <img src="../../../public/icons/insta.svg" alt="instagram" />
          <img src="../../../public/icons/x.svg" alt="x" />
          <img src="../../../public/icons/youtube.svg" alt="youtube" />
        </div>
      </div>
      <hr />
      <div className={styles.Lower}>
        <span>
          &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2026
        </span>
        <div className={styles.Language}>
          <img src="../../../public/icons/earth.svg" alt="language" />
          <select>
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>
    </footer>
  )
}


export default Footer