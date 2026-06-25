function MascotaCard({ mascota }) {
  return (
    <article className="mascota-card">
      <h2>{mascota.nombre}</h2>
      <p>
        <strong>Raza:</strong> {mascota.raza}
      </p>
      <p>
        <strong>Edad:</strong> {mascota.edad} años
      </p>
      <p>
        <strong>Especie:</strong> {mascota.especie}
      </p>
      <p>{mascota.descripcion}</p>
      <ul>
        {mascota.caracteristicas.map((caracteristica) => (
          <li key={caracteristica}>{caracteristica}</li>
        ))}
      </ul>
      {mascota.adopcionUrgente && (
        <p>
          <strong>¡Adopción urgente!</strong>
        </p>
      )}
    </article>
  );
}

export default MascotaCard;
