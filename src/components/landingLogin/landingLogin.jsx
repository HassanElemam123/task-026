import styles from "./landingLogin.module.css";
import { useFormik } from "formik";
import { useState } from "react";

export default function LandingLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 10) {
      errors.password = "Must be at least 10 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: () => {
      // هنا تحط login API بدل console.log
    },
  });

  const canSubmit = Object.keys(formik.errors).length === 0;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back!</h2>

        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}

          <label className={styles.label} htmlFor="password">Password</label>
          <div className={styles.passwordWrap}>
            <input
              className={styles.input}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              className={styles.eyeBtn}
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <img src="../../../public/icons/Buttoneye.svg" alt="" />
            </button>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}

          <div className={styles.row}>
            <label className={styles.remember}>
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <a className={styles.link} href="#">
              Forget password?
            </a>
          </div>

          <button className={styles.primaryBtn} type="submit" disabled={!canSubmit} aria-disabled={!canSubmit}>
            Log in
          </button>

          <p className={styles.smallText}>
            Don’t have an account?{" "}
            <a className={styles.link} href="/signup">
              Signup
            </a>
          </p>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <button type="button" className={styles.socialBtn}>
            <span className={styles.googleIcon}>
              <img src="../../../public/icons/logos_google-icon.svg" alt="" />
            </span>
            Login with Google
          </button>

          <button type="button" className={styles.socialBtn}>
            <span className={styles.fbIcon}>
              <img src="../../../public/icons/fabicon.svg" alt="" />
            </span>
            Login with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}
