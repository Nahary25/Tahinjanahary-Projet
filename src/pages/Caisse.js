import React, { useState } from 'react';

const Caisse = () => {
  const [solde, setSolde] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [showAll, setShowAll] = useState(false); // État pour contrôler l'affichage complet ou limité

  const handleTransaction = (type) => {
    const montant = parseFloat(prompt(`Entrez le montant de la transaction (${type}):`));
    if (isNaN(montant)) {
      alert("Veuillez entrer un montant valide");
      return;
    }

    const description = prompt(`Entrez la raison de l'action (${type}):`);
    if (!description || !description.trim()) {
      alert("Erreur : Vous devez entrer une description valide pour cette transaction.");
      return;
    }

    setSolde(prevSolde => {
      const newSolde = type === "Dépôt" ? prevSolde + montant : prevSolde - montant;
      const newTransaction = {
        type,
        montant,
        description,
        date: new Date().toLocaleString()
      };
      setTransactions([newTransaction, ...transactions]);
      return newSolde;
    });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h1 className="text-center mb-4">Gestion de la Caisse</h1>
        <div className="text-center">
          <p className="h3 text-success">
            Solde actuel : {solde.toLocaleString('fr-FR')} MGA
          </p>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button onClick={() => handleTransaction('Dépôt')} className="btn btn-success mx-3">Ajouter un dépôt</button>
          <button onClick={() => handleTransaction('Retrait')} className="btn btn-danger mx-3">Effectuer un retrait</button>
        </div>
        <div className="mt-4">
          <h3>Historique des transactions :</h3>
          {transactions.length > 0 ? (
            <>
              <ul className="list-group">
                {(showAll ? transactions : transactions.slice(0, 3)).map((transaction, index) => (
                  <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${transaction.type === "Dépôt" ? "bg-success text-white" : "bg-danger text-white"}`}>
                    <div className="d-flex align-items-center">
                      {/* Flèche pour Dépôt ou Retrait */}
                      <span className={`me-2`}>
                        {transaction.type === "Dépôt" ? (
                          <i className="bi bi-arrow-down-circle-fill"></i> // Flèche pour dépôt
                        ) : (
                          <i className="bi bi-arrow-up-circle-fill"></i> // Flèche pour retrait
                        )}
                      </span>
                      <span>
                        <strong>{transaction.type}</strong> de {transaction.montant.toLocaleString('fr-FR')} MGA
                      </span>
                    </div>
                    <div>
                      <strong>Description :</strong> {transaction.description}
                    </div>
                    <div>
                      <strong>Date :</strong> {transaction.date}
                    </div>
                  </li>
                ))}
              </ul>
              {/* Lien "Voir plus +" */}
              {transactions.length > 3 && !showAll && (
                <div className="text-center mt-3">
                  <button
                    className="btn btn-link"
                    onClick={() => setShowAll(true)}
                  >
                    Voir plus +
                  </button>
                </div>
              )}
              {/* Lien "Voir moins -" */}
              {showAll && (
                <div className="text-center mt-3">
                  <button
                    className="btn btn-link"
                    onClick={() => setShowAll(false)}
                  >
                    Voir moins -
                  </button>
                </div>
              )}
            </>
          ) : (
            <p>Aucune transaction enregistrée</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Caisse;
