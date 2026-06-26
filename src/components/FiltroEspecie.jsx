import "./FiltroEspecie.css";

function FiltroEspecie({
  especie,
  setEspecie,
  busqueda,
  setBusqueda,
}) {
  return (
    <div className="filtros-container">

      {/* 🔎 BUSCADOR BONITO */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar una mascota por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {busqueda && (
          <button
            className="clear-btn"
            onClick={() => setBusqueda("")}
          >
            ✕
          </button>
        )}
      </div>

      {/* 🐾 SELECT MEJORADO */}
      <select
        className="select-especie"
        value={especie}
        onChange={(e) => setEspecie(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Otro">Otro</option>
      </select>

    </div>
  );
}

export default FiltroEspecie;