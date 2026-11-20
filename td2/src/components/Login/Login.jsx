
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let newErreur = {};

    if (!email.trim()) {
      newErreur.email = "Veuillez introduire votre email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErreur.email = "Adresse email invalide";
    }

    if (!password.trim()) {
      newErreur.password = "Veuillez introduire votre mot de passe";
    } else if (password.length < 8) {
      newErreur.password = "Le mot de passe doit contenir au moins 8 caractères";
    } else if (!/[A-Z]/.test(password)) {
      newErreur.password = "Le mot de passe doit contenir une majuscule";
    } else if (!/[0-9]/.test(password)) {
      newErreur.password = "Le mot de passe doit contenir un chiffre";
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      newErreur.password = "Le mot de passe doit contenir un caractère spécial";
    }

    setError(newErreur);

    if (Object.keys(newErreur).length === 0) {
      alert("Formulaire valide !");
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.loginCard}>

        <h1 className={styles.logo}>Voyage</h1>
        <p className={styles.slogan}>Explorez le monde avec nous</p>

        <h2 className={styles.title}>Connexion</h2>
        <p className={styles.subtitle}>
          Connectez-vous à votre compte
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <p className={styles.error}>{error.email}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && (
              <p className={styles.error}>{error.password}</p>
            )}
          </div>

          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          </button>

          <button type="submit" className={styles.loginButton}>
            Se connecter
          </button>

        </form>
      </div>
    </section>
  );
}

export default Login;
