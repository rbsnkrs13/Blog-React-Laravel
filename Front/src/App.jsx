import "./App.css";
import NavigationFinal from "./js/components/dev/NavigationFinal/NavigationFinal";
import Circle_graphic from "./js/components/dev/circle_graphic/Circle_graphic";
import AppRoutes from "./js/router/AppRoutes";
import Footer from "./js/components/dev/footer/Footer";


function App() {

  return (
    <div className="App">
      <NavigationFinal />
      <main>
        <AppRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
