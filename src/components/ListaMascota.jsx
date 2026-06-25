import MascotaCard from "./MascotaCard";

function ListaMascota({ mascotas }) {
  return (
    <div className="lista-mascotas">
      {mascotas.map((mascota) => (
        <MascotaCard key={mascota.id} mascota={mascota} />
      ))}
    </div>
  );
}

export default ListaMascota;
