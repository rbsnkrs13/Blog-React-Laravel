import "./App.css";
import NavigationFinal from "./js/components/dev/NavigationFinal/NavigationFinal";
import AppRoutes from "./js/router/AppRoutes";

import Footer from "./js/components/dev/footer/Footer";


function App() {

  return (
    <div className="App">
      {/* <NavigationFinal /> */}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
