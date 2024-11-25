import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div 
      className="col-md-2 bg-light border-right" 
      style={{
        minHeight: '100vh', 
        position: 'fixed', 
        left: 0, 
        top: 0, 
        borderTopRightRadius: '15px', // Courbure du coin droit haut
        borderBottomLeftRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Pour espacer les éléments
        alignItems: 'center', // Centrer la navbar
      }}
    >
      <div className="sidebar pt-4 d-flex flex-column align-items-center">
        {/* Logo et titre */}
        <div className="d-flex align-items-center justify-content-center mb-4">
          <img 
            src="/assets/Logo_SOEREMF.png" 
            alt="Logo" 
            className="img-fluid" 
            style={{ maxWidth: '50px', marginRight: '10px' }} 
          />
          <h3 className="text-center mb-0">SO.E.RE.M.F</h3>
        </div>

        {/* Menu */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <i className="bi bi-house-door me-2"></i> Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/membre-inscription">
              <i className="bi bi-person-plus-fill me-2"></i> Inscrire Membre
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activites">
              <i className="bi bi-calendar-event me-2"></i> Activités
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/caisse">
              <i className="bi bi-cash-coin me-2"></i> Caisse
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <i className="bi bi-envelope-fill me-2"></i> Contact
            </Link>
          </li>
        </ul>

        {/* Footer (Bouton de déconnexion) */}
        <div className="mt-auto">
          <div className="d-flex justify-content-center">
            <Link 
              to="/logout"  // Remplacez cette route par la route de déconnexion réelle
              className="btn btn-danger w-100 py-2 mt-3 rounded-3"
              style={{
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e74a3b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
            >
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLeft;
