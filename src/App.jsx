import MascotaCard from "./components/MascotaCard";
import { mascotas } from "./data/mascotas";

function App() {
  return (
    <div>
      <h1>AdoptaPet</h1>

      <MascotaCard
        nombre={mascotas[0].nombre}
        raza={mascotas[0].raza}
        edad={mascotas[0].edad}
        especie={mascotas[0].especie}
        descripcion={mascotas[0].descripcion}
        caracteristicas={mascotas[0].caracteristicas}
      />
    </div>
  );
}

export default App;