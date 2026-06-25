import { mascotas } from "./data/mascotas";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🐾 AdoptaPet</h1>
      <p>Se importaron {mascotas.length} mascotas desde el archivo de datos.</p>
    </div>
  );
}

export default App;