import { useState } from "react";
import ListaMascotas from "./components/ListaMascotas";
import { mascotas } from "./data/mascotas";
import FiltroEspecie from "./components/FiltroEspecie";

function App() {
  const [especie, setEspecie] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const mascotasFiltradas = mascotas.filter((m) => {
    const coincideEspecie =
      especie === "Todas" || m.especie === especie;

    const coincideNombre =
      m.nombre.toLowerCase().includes(busqueda.toLowerCase());

    return coincideEspecie && coincideNombre;
  });

  return (
    <div>
      <h1>🐾 AdoptaPet</h1>

      {/* FILTROS */}
      <FiltroEspecie
        especie={especie}
        setEspecie={setEspecie}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      {/* LISTA */}
      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p>No hay mascotas que coincidan</p>
      )}
    </div>
  );
}

export default App;