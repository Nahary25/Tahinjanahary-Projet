import React, { useState } from "react";
import axios from "axios";

const MembreInscription = () => {
  const [formData, setFormData] = useState({
    matricule: "",
    nom: "",
    prenom: "",
    sexe: "", // sexe, peut être "M" ou "F"
    tel: "",
    adresse: "",
    promotion: "",
    etablissement: "",
    mention: "",
    originaire: "",
    photo: null, // photo
  });

  const [members, setMembers] = useState([]); // State pour les membres inscrits

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({
        ...formData,
        photo: e.target.files[0], // Gérer le fichier image
      });
    } else if (e.target.name === "sexe") {
      setFormData({
        ...formData,
        sexe: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("matricule", formData.matricule);
    formDataToSend.append("nom", formData.nom);
    formDataToSend.append("prenom", formData.prenom);
    formDataToSend.append("sexe", formData.sexe);
    formDataToSend.append("tel", formData.tel);
    formDataToSend.append("adresse", formData.adresse);
    formDataToSend.append("promotion", formData.promotion);
    formDataToSend.append("etablissement", formData.etablissement);
    formDataToSend.append("mention", formData.mention);
    formDataToSend.append("originaire", formData.originaire);
    formDataToSend.append("photo", formData.photo); // Ajouter la photo au FormData

    try {
      // Envoi des données avec axios, incluant la photo
      const response = await axios.post("http://localhost:5000/api/membres", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Ajouter le membre dans la liste locale (mise à jour de l'UI)
      setMembers([
        ...members,
        {
          matricule: formData.matricule,
          nom: formData.nom,
          prenom: formData.prenom,
          sexe: formData.sexe,
          tel: formData.tel,
          adresse: formData.adresse,
          promotion: formData.promotion,
          etablissement: formData.etablissement,
          mention: formData.mention,
          originaire: formData.originaire,
          photo: URL.createObjectURL(formData.photo), // Créer un lien vers la photo pour prévisualisation
        },
      ]);

      // Réinitialisation du formulaire après soumission
      setFormData({
        matricule: "",
        nom: "",
        prenom: "",
        sexe: "",
        tel: "",
        adresse: "",
        promotion: "",
        etablissement: "",
        mention: "",
        originaire: "",
        photo: null,
      });

      alert("Membre ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Formulaire à gauche */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* Photo du membre */}
            <div className="form-group mb-4 text-center">
              <label htmlFor="photo-upload">
                {/* Zone de téléchargement de photo sous forme de cercle */}
                <input
                  type="file"
                  name="photo"
                  className="form-control-file"
                  onChange={handleChange}
                  accept="image/*"
                  id="photo-upload"
                  style={{
                    display: "none", // Cacher l'input file
                  }}
                />
                {/* Image prévisualisée sous forme de cercle */}
                {formData.photo ? (
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt="Photo d'identité"
                    className="mt-3 rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      cursor: "pointer", // Ajouter un curseur pour indiquer que l'image peut être modifiée
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "24px",
                      color: "#aaa",
                    }}
                  >
                    + {/* Un signe + dans le cercle */}
                  </div>
                )}
              </label>
            </div>

            {/* Matricule */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="matricule"
                className="form-control"
                placeholder="Matricule"
                value={formData.matricule}
                onChange={handleChange}
              />
            </div>

            {/* Nom */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="nom"
                className="form-control"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>

            {/* Prénom */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="prenom"
                className="form-control"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>

            {/* Sexe (checkbox) */}
            <div className="form-group mb-3">
              <label>Sexe</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="sexe"
                  value="M"
                  checked={formData.sexe === "M"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Homme</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="sexe"
                  value="F"
                  checked={formData.sexe === "F"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label className="form-check-label">Femme</label>
              </div>
            </div>

            {/* Téléphone */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="tel"
                className="form-control"
                placeholder="Téléphone"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>

            {/* Adresse */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="adresse"
                className="form-control"
                placeholder="Adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>

            {/* Promotion */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="promotion"
                className="form-control"
                placeholder="Promotion"
                value={formData.promotion}
                onChange={handleChange}
              />
            </div>

            {/* Etablissement */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="etablissement"
                className="form-control"
                placeholder="Etablissement"
                value={formData.etablissement}
                onChange={handleChange}
              />
            </div>

            {/* Mention */}
            <div className="form-group mb-3">
              <input
                type="text"
                name="mention"
                className="form-control"
                placeholder="Mention"
                value={formData.mention}
                onChange={handleChange}
              />
            </div>

            {/* Originaire */}
            <div className="form-group mb-4">
              <input
                type="text"
                name="originaire"
                className="form-control"
                placeholder="Originaire"
                value={formData.originaire}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block w-100">
              Inscrire
            </button>
          </form>
        </div>

        {/* Tableau des membres à droite avec espacement */}
        <div className="col-md-6 mt-5 mt-md-0">
          <h3 className="text-center">Liste des Membres</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Sexe</th>
                <th>Téléphone</th>
                <th>Adresse</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={member.photo}
                      alt="photo membre"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{member.matricule}</td>
                  <td>{member.nom}</td>
                  <td>{member.prenom}</td>
                  <td>{member.sexe}</td>
                  <td>{member.tel}</td>
                  <td>{member.adresse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MembreInscription;
