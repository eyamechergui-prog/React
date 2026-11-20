import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Destinations />
        <Login />
      </main>
      <Footer />
    </div>
  );
}
export default App;