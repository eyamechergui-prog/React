import { useState } from "react";

function Exemple() {
    const [nom, setnom] = useState("");
    const [age, setage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        alert("Bonjour " + nom + " vous avez " + age + " ans");
        setnom("");
        setage("");
    }

    function handleReset() {
        setnom("");
        setage("");
    }

    return (
        <div>
            <h2>Formulaire d'inscription</h2>

            <form onSubmit={handleSubmit} >
                <label>Nom : </label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setnom(e.target.value)}
                    required
                />

                <br /><br />

                <label>Age : </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    required
                />

                <br /><br />

                <input type="submit" value="Soumettre" />
                {/* <input type="reset" value="Reset" /> */}
            </form>
        </div>
    );
}

export default Exemple;