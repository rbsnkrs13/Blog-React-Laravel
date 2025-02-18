import "./App.css";
import Navigation from "./js/components/dev/Navigation/Navigation";
import AppRoutes from "./js/router/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
