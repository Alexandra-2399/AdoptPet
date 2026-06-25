import ListaMascotas from "./components/ListaMascotas";
import { mascotas } from "./data/mascotas";

function App() {
  return (
    <div>
      <h1>🐾 AdoptaPet</h1>

      <ListaMascotas mascotas={mascotas} />
    </div>
  );
}

export default App;