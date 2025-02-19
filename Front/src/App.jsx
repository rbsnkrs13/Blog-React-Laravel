import "./App.css";
import Footer from "./js/components/dev/footer/Footer";
import Navigation from "./js/components/dev/Navigation/Navigation";
import AppRoutes from "./js/router/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
