// src/components/NavbarLeft.js
import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="col-md-2 bg-light border-right" style={{ minHeight: '100vh' }}>
      <div className="sidebar">
        <div className="d-flex align-items-center justify-content-center mt-4 mb-4">
          <img 
            src="/assets/Logo_SOEREMF.png" 
            alt="Logo" 
            className="img-fluid" 
            style={{ maxWidth: '50px', marginRight: '10px' }} 
          />
          <h3 className="text-center mb-0">SO.E.RE.M.F</h3>
        </div>

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
      </div>
    </div>
  );
};

export default NavbarLeft;
