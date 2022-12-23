import './App.css';
import { Brand, Navigation, Team, Footer, WeatherBar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => (
  <div className="App">
    <Brand />
    <Navigation />
    <WeatherBar />
    <Team />
    <Footer />
  </div>
);

export default App;
