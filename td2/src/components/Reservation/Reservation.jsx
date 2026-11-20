import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
  // 1. Déclaration des états
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [reservation, setReservation] = useState(null);
  const [erreurs, setErreurs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // 2. Effacer l'erreur d'un champ
  function effacerErreur(champ) {
    setErreurs((prev) => {
      const nouvellesErreurs = { ...prev };
      delete nouvellesErreurs[champ];
      return nouvellesErreurs;
    });
  }

  // 3. Validation du formulaire
  function validerFormulaire() {
    let erreursTemp = {};

    if (nom.trim() === "") {
      erreursTemp.nom = "Le nom est obligatoire";
    }

    if (email.trim() === "") {
      erreursTemp.email = "L'adresse email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erreursTemp.email = "Adresse email invalide";
    }

    if (telephone.trim() === "") {
      erreursTemp.telephone = "Le téléphone est obligatoire";
    }

    setErreurs(erreursTemp);

    return Object.keys(erreursTemp).length === 0;
  }

  // 4. Soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault();

    if (validerFormulaire()) {
      setReservation({
        nom,
        email,
        telephone,
      });

      setShowPopup(true);
    }
  }

  // Réinitialiser le formulaire
  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setErreurs({});
    setReservation(null);
    setShowPopup(false);
  }

  // 5. Affichage
  return (
    <section className={styles.container}>
      <h2>Réservez votre voyage</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label>Nom et prénom :</label>
          <input
            type="text"
            className={erreurs.nom ? styles.inputError : ""}
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
              effacerErreur("nom");
            }}
            placeholder="Votre nom et prénom"
          />
          {erreurs.nom && (
            <span className={styles.errorMessage}>{erreurs.nom}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Adresse e-mail :</label>
          <input
            type="email"
            className={erreurs.email ? styles.inputError : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              effacerErreur("email");
            }}
            placeholder="Votre adresse e-mail"
          />
          {erreurs.email && (
            <span className={styles.errorMessage}>{erreurs.email}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Téléphone :</label>
          <input
            type="tel"
            className={erreurs.telephone ? styles.inputError : ""}
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
              effacerErreur("telephone");
            }}
            placeholder="Votre numéro de téléphone"
          />
          {erreurs.telephone && (
            <span className={styles.errorMessage}>{erreurs.telephone}</span>
          )}
        </div>

        <button type="submit">Réserver</button>
        <button type="button" onClick={handleReset}>
          Réinitialiser
        </button>
      </form>

      {/* Popup de confirmation */}
      {showPopup && reservation && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h3>Réservation confirmée</h3>
            <p>Nom : {reservation.nom}</p>
            <p>Email : {reservation.email}</p>
            <p>Téléphone : {reservation.telephone}</p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservation;