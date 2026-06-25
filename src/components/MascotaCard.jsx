import PropTypes from "prop-types";
import "./MascotaCard.css";

function MascotaCard({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
}) {
  return (
    <div className={`card ${especie.toLowerCase()}`}>
      <h2>{nombre}</h2>

      <p><strong>Raza:</strong> {raza}</p>

      <p><strong>Edad:</strong> {edad} años</p>

      <p><strong>Especie:</strong> {especie}</p>

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
};

MascotaCard.defaultProps = {
  nombre: "Sin nombre",
  raza: "No especificada",
  edad: 0,
  especie: "Otro",
  descripcion: "Sin descripción",
  caracteristicas: [],
};

export default MascotaCard;