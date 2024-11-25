import React, { useState } from 'react';

const Activites = () => {
  const [activites, setActivites] = useState([]);
  const [newActivite, setNewActivite] = useState('');

  const handleAddActivite = () => {
    if (newActivite.trim() !== '') {
      setActivites([...activites, newActivite]);
      setNewActivite('');
    } else {
      alert("Veuillez entrer une activité valide.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h1 className="text-center mb-4">Gestion des Activités</h1>

        {/* Zone de saisie d'une nouvelle activité */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            value={newActivite}
            onChange={(e) => setNewActivite(e.target.value)}
            placeholder="Nouvelle activité"
            className="form-control w-75"
          />
          <button 
            onClick={handleAddActivite} 
            className="btn btn-primary ms-3 w-25"
          >
            Ajouter
          </button>
        </div>

        {/* Liste des activités */}
        <h3>Liste des activités :</h3>
        {activites.length > 0 ? (
          <ul className="list-group">
            {activites.map((activite, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {activite}
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => setActivites(activites.filter((item, i) => i !== index))}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune activité ajoutée pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Activites;
