import MascotaCard from "./MascotaCard";
import "./ListaMascotas.css";

function ListaMascotas({ mascotas }) {
  return (
    <div className="contenedor">
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
}

export default ListaMascotas;