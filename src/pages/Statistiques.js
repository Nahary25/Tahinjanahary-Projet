// src/pages/Statistiques.js

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Enregistrement des composants Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statistiques = () => {
  // Exemple de données pour les graphiques
  const dataMembres = {
    labels: ["Jan", "Feb", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
    datasets: [
      {
        label: "Membres Inscrits",
        data: [500, 600, 800, 1000, 1100, 1300, 1450, 1550, 1650, 1700, 1800, 1900],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const dataFonds = {
    labels: ["Jan", "Feb", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
    datasets: [
      {
        label: "Fonds Collectés (en MGA)",
        data: [1000000, 1500000, 1800000, 2200000, 2400000, 3000000, 3500000, 4000000, 4500000, 5000000, 5500000, 6000000],
        fill: false,
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.1,
      },
      {
        label: "Retraits/Dépenses (en MGA)",
        data: [500000, 400000, 300000, 500000, 200000, 600000, 700000, 800000, 600000, 700000, 800000, 900000],
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderDash: [5, 5], // Ligne pointillée pour les dépenses
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 mb-5 bg-white rounded">
        <h2 className="text-center text-primary mb-4">
          <i className="bi bi-bar-chart-fill me-2"></i>
          Tableau de Bord - Statistiques de l'Association
        </h2>
        <p className="text-center text-muted mb-4">
          Analysez les données clés et performances de l'association en un coup d'œil.
        </p>
      </div>
      
      {/* Section des statistiques principales */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="card shadow border-0 bg-light">
            <div className="card-body">
              <i className="bi bi-people-fill text-primary display-4"></i>
              <h5 className="card-title mt-3">Membres Actifs</h5>
              <p className="card-text fs-4">1 245</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 bg-light">
            <div className="card-body">
              <i className="bi bi-cash-coin text-success display-4"></i>
              <h5 className="card-title mt-3">Fonds Collectés</h5>
              <p className="card-text fs-4">12 340 000 MGA</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 bg-light">
            <div className="card-body">
              <i className="bi bi-calendar-event-fill text-warning display-4"></i>
              <h5 className="card-title mt-3">Événements Organisés</h5>
              <p className="card-text fs-4">24</p>
            </div>
          </div>
        </div>
      </div>

      {/* Graphiques et analyses */}
      <div className="card shadow-sm p-4">
        <h4 className="mb-4">
          <i className="bi bi-graph-up-arrow text-success me-2"></i>
          Analyse Visuelle des Fonds Collectés et Retraits
        </h4>
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 bg-light rounded">
              <h6 className="text-primary">Évolution des Fonds Collectés et Retraits</h6>
              <Line data={dataFonds} options={{ responsive: true }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bouton d'action */}
      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg">
          <i className="bi bi-arrow-clockwise me-2"></i>
          Actualiser les Données
        </button>
      </div>
    </div>
  );
};

export default Statistiques;
