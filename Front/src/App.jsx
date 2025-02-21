import "./App.css";
import NavigationFinal from "./js/components/dev/NavigationFinal/NavigationFinal";
import AppRoutes from "./js/router/AppRoutes";
import Authors from "./js/components/dev/authors/Authors";

import Footer from "./js/components/dev/footer/Footer";


function App() {

  return (
    <div className="App">
      <NavigationFinal />
      <main>
        <AppRoutes />
        <Authors/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
