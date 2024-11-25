import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLeft from "./components/NavbarLeft"; // importation de la Navbar à gauche
import Statistiques from "./pages/Statistiques"; // page des statistiques
import MembreInscription from "./pages/MembreInscription"; // page d'inscription
import Activites from "./pages/Activites"; // page d'activités
import Caisse from "./pages/Caisse"; // page de la caisse

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Navbar fixe à gauche */}
          <NavbarLeft />

          {/* Contenu dynamique à droite */}
          <div className="col-md-10 offset-md-2" style={{ marginLeft: '16.66667%' }}>
            <Routes>
              {/* Définir les différentes routes */}
              <Route path="/" element={<Statistiques />} />  {/* Page Statistiques par défaut */}
              <Route path="/membre-inscription" element={<MembreInscription />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/caisse" element={<Caisse />} />
              {/* Ajoutez d'autres routes selon vos besoins */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
