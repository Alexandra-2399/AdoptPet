function FiltroEspecie({ filtro, setFiltro }) {
  const opciones = ["Todas", "Perro", "Gato", "Otro"];

  return (
    <div>
      <label htmlFor="filtro-especie">Filtrar por especie:</label>
      <select
        id="filtro-especie"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      >
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FiltroEspecie;
