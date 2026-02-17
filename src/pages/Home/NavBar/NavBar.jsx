import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  return (
    <header className={styles.NavBar}>
      <div className={styles.LeftSide}>
        <div className={styles.LogoContainer}>
          <img src="/icons/book-bookmark-1.svg" alt="icon" />
          <span className={styles.LogoName}>Bookshop</span>
        </div>
        <div className={styles.Divider}></div>
        <nav className={styles.Links}>  
          <NavLink to="/" end >
            Home
          </NavLink>
          <NavLink to="/books" end>Books
          </NavLink>
          <NavLink to="/about" end>About us
          </NavLink>
        </nav>
      </div>
      <div className={styles.Btns}>
      <button
        className={styles.Login}
        onClick={() => navigate("/login")}
      >
        Log in
      </button>
      <button
        className={styles.SignUp}
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
    </header>
  );
}

export default NavBar;
