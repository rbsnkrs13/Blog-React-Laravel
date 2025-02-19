import "./App.css";
import Navigation from "./js/components/dev/Navigation/Navigation";
import AppRoutes from "./js/router/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
