import styles from "./landingSign.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function LandingSign() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),

      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),

    onSubmit: () => {
      alert("Form submitted successfully!");
    },
  });

  const canSubmit =
    formik.values.agree && Object.keys(formik.errors).length === 0;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.twoCols}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="John"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className={styles.error}>{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input
                className={styles.input}
                type="text"
                placeholder="Smith"
                name="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className={styles.error}>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              placeholder="example@gmail.com"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <div className={styles.passwordWrap}>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter password"
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
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm password
            </label>
            <div className={styles.passwordWrap}>
              <input
                className={styles.input}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter password"
              />
              <button
                type="button"
                className={styles.eyeBtn}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <img src="../../../public/icons/Buttoneye.svg" alt="" />
              </button>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className={styles.error}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <label className={styles.agree}>
            <input
              type="checkbox"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
            />
            <span>
              Agree with{" "}
              <a className={styles.link} href="#">
                Terms &amp; Conditions
              </a>
            </span>
          </label>

          <button
            className={styles.primaryBtn}
            type="submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
          >
            Sign Up
          </button>

          <p className={styles.smallText}>
            Already have an account?{" "}
            <a className={styles.link} href="/login">
              Login
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
