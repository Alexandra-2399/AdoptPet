import PropTypes from "prop-types";
import "./MascotaCard.css";

function MascotaCard({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
  adopcionUrgente,
}) {
  const claseCard = `card ${especie.toLowerCase()}${adopcionUrgente ? " urgente" : ""}`;

  return (
    <div className={claseCard}>
      <h2>{nombre}</h2>

      {adopcionUrgente && <p className="badge">¡Adopción urgente!</p>}

      <p>
        <strong>Raza:</strong> {raza}
      </p>

      <p>
        <strong>Edad:</strong> {edad} años
      </p>

      <p>
        <strong>Especie:</strong> {especie}
      </p>

      <p>{descripcion}</p>

      <h4>Características</h4>

      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
    </div>
  );
}

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.string,
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool,
};

MascotaCard.defaultProps = {
  nombre: "Sin nombre",
  raza: "No especificada",
  edad: 0,
  especie: "Otro",
  descripcion: "Sin descripción",
  caracteristicas: [],
  adopcionUrgente: false,
};

export default MascotaCard;